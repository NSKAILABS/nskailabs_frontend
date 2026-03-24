"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const pricing = [
  {
    id: "starter",
    name: "Starter",
    price: "\u20B920,000",
    period: "/month",
    description: "For individual researchers and students.",
    features: [
      "Basic simulation tools",
      "Up to 50 simulations/month",
      "Standard support",
      "GDS export",
      "Community access",
    ],
    cta: "Subscribe",
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "\u20B945,000",
    period: "/month",
    description: "For research labs and small teams.",
    features: [
      "Advanced AI optimization",
      "Unlimited simulations",
      "Priority support",
      "RCWA & FDTD workflows",
      "Team collaboration",
      "API access",
    ],
    cta: "Subscribe",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: " pricing",
    description: "For semiconductor and photonics companies.",
    features: [
      "Custom integrations",
      "Dedicated infrastructure",
      "24/7 support",
      "On-premise deployment",
      "Custom training",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function PricingSection() {
  const { user } = useAuth();
  const router = useRouter();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (planId === "enterprise") {
      router.push("/contact");
      return;
    }

    setLoadingPlan(planId);

    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch("/api/payments/create-order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan: planId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        alert(data?.error || "Failed to create order. Please try again.");
        setLoadingPlan(null);
        return;
      }

      const order = await res.json();

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        const options = {
          key: order.key_id,
          amount: order.amount,
          currency: order.currency,
          name: "NSKAILabs",
          description: `Photonic AI - ${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan`,
          order_id: order.order_id,
          handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
            const verifyRes = await fetch("/api/payments/verify/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(response),
            });

            if (verifyRes.ok) {
              router.push("/dashboard");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          },
          prefill: {
            email: user.email,
            name: `${user.first_name} ${user.last_name}`.trim() || user.username,
          },
          theme: { color: "#6366f1" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoadingPlan(null);
      };
      document.body.appendChild(script);
    } catch {
      alert("Something went wrong. Please try again.");
      setLoadingPlan(null);
    }
  };

  return (
    <section className="section-padding bg-dark-900/50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Flexible plans designed for every stage of your photonic design
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`card-dark flex flex-col ${
                plan.highlighted
                  ? "border-indigo-500/50 ring-1 ring-indigo-500/20"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={loadingPlan === plan.id}
                className={
                  plan.highlighted
                    ? "gradient-btn w-full text-center disabled:opacity-50"
                    : "inline-flex items-center justify-center w-full px-6 py-3 rounded-lg border border-indigo-500/50 text-indigo-400 font-semibold hover:bg-indigo-500/10 transition-all duration-300 disabled:opacity-50"
                }
              >
                {loadingPlan === plan.id ? "Processing..." : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
