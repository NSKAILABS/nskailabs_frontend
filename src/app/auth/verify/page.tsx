"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function VerifyContent() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { verifyMagicLink } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");
    
    if (!token) {
      setStatus("error");
      setMessage("Invalid magic link. Please request a new one.");
      return;
    }

    const verify = async () => {
      const result = await verifyMagicLink(token);
      
      if (result.ok) {
        setStatus("success");
        setIsNewUser(result.isNewUser || false);
        setMessage(result.isNewUser ? "Account created successfully!" : "Signed in successfully!");
        
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to verify magic link. Please try again.");
      }
    };

    verify();
  }, [searchParams, verifyMagicLink, router]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
      <div className="w-full max-w-md text-center">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-white mb-2">Verifying your magic link...</h2>
            <p className="text-gray-400">Please wait while we sign you in.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
            <p className="text-gray-400">
              {isNewUser 
                ? "Welcome to NSKAILabs! Redirecting to your dashboard..." 
                : "Redirecting to your dashboard..."}
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Verification Failed</h2>
            <p className="text-gray-400 mb-6">{message}</p>
            <button
              onClick={() => router.push("/login")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
        <div className="w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        </div>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}
