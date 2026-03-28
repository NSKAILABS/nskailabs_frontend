"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.nskailabs.com";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile?: {
    bio: string;
    institution: string;
    research_interests: string[];
    website: string;
    is_contributor: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  requestMagicLink: (email: string) => Promise<{ ok: boolean; error?: string }>;
  verifyMagicLink: (token: string) => Promise<{ ok: boolean; error?: string; isNewUser?: boolean }>;
  updateProfile: (data: ProfileUpdateData) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
}

interface ProfileUpdateData {
  first_name?: string;
  last_name?: string;
  bio?: string;
  institution?: string;
  research_interests?: string[];
  website?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async (token: string) => {
    try {
      let res = await fetch(`${API_URL}/api/auth/user/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_URL}/api/auth/user/`, {
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
        setUser(null);
      }
    } catch {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setUser(null);
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

  async function requestMagicLink(email: string) {
    try {
      const res = await fetch(`${API_URL}/api/auth/request-magic-link/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.error || data?.email?.[0] || "Failed to send magic link." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function verifyMagicLink(token: string) {
    try {
      const res = await fetch(`${API_URL}/api/auth/verify-magic-link/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.tokens.access);
        localStorage.setItem("refresh_token", data.tokens.refresh);
        setUser(data.user);
        return { ok: true, isNewUser: data.is_new_user };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.error || "Invalid or expired magic link." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function updateProfile(profileData: ProfileUpdateData) {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return { ok: false, error: "Not authenticated." };
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
        return { ok: true };
      } else {
        const data = await res.json().catch(() => null);
        return { ok: false, error: data?.error || "Failed to update profile." };
      }
    } catch {
      return { ok: false, error: "Network error. Please try again." };
    }
  }

  async function logout() {
    const token = localStorage.getItem("access_token");
    const refresh = localStorage.getItem("refresh_token");
    
    if (token && refresh) {
      try {
        await fetch(`${API_URL}/api/auth/logout/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ refresh }),
        });
      } catch {
        // Ignore logout errors
      }
    }
    
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, requestMagicLink, verifyMagicLink, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
