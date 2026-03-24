"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

// API URL from environment variable - points to Django backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_google_user?: boolean;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (data: RegisterData) => Promise<{ ok: boolean; error?: string }>;
  googleAuth: (credential: string) => Promise<{ ok: boolean; error?: string }>;
  sendOTP: (email: string, otpType: 'registration' | 'login') => Promise<{ ok: boolean; error?: string }>;
  verifyOTP: (data: OTPVerifyData) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
}

interface OTPVerifyData {
  email: string;
  otp: string;
  otp_type: 'registration' | 'login';
  username?: string;
  first_name?: string;
  last_name?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async (token: string) => {
    try {
      let res = await fetch(`${API_URL}/api/auth/me/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_URL}/api/auth/me/`, {
            headers: { Authorization: `Bearer ${newToken}` },
          });
        }
      }
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      }
    } catch {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, [fetchUser]);

  async function refreshAccessToken(): Promise<string | null> {
    const refresh = localStorage.getItem("refresh_token");
    if (!refresh) return null;
    try {
      const res = await fetch(`${API_URL}/api/auth/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        if (data.refresh) {
          localStorage.setItem("refresh_token", data.refresh);
        }
        return data.access;
      }
    } catch {
      // Ignore refresh errors
    }
    return null;
  }

  async function login(username: string, password: string) {
    try {
      const res = await fetch(`${API_URL}/api/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        await fetchUser(data.access);
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.detail || "Invalid credentials." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function register(formData: RegisterData) {
    try {
      const res = await fetch(`${API_URL}/api/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access);
        localStorage.setItem("refresh_token", data.tokens.refresh);
        setUser(data.user);
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        const firstError = data
          ? Object.values(data).flat().join(" ")
          : "Registration failed.";
        return { ok: false, error: firstError };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function googleAuth(credential: string) {
    try {
      const res = await fetch(`${API_URL}/api/auth/google/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access);
        localStorage.setItem("refresh_token", data.tokens.refresh);
        setUser(data.user);
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.error || "Google authentication failed." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function sendOTP(email: string, otpType: 'registration' | 'login') {
    try {
      const res = await fetch(`${API_URL}/api/auth/otp/send/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp_type: otpType }),
      });

      if (res.ok) {
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.error || "Failed to send OTP." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function verifyOTP(data: OTPVerifyData) {
    try {
      const res = await fetch(`${API_URL}/api/auth/otp/verify/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const responseData = await res.json();
        if (responseData.tokens) {
          localStorage.setItem("access_token", responseData.tokens.access);
          localStorage.setItem("refresh_token", responseData.tokens.refresh);
          setUser(responseData.user);
        }
        return { ok: true };
      } else {
        const responseData = await res.json().catch(() => null);
        return { ok: false, error: responseData?.error || "OTP verification failed." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, googleAuth, sendOTP, verifyOTP, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}