import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NSKAILabs. Have a question, partnership inquiry, or want to learn more about our AI & Photonics solutions?",
  openGraph: {
    title: "Contact NSKAILabs",
    description:
      "Reach out for questions, partnerships, or to learn more about AI & Photonics.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
