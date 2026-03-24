import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NSKAILabs - AI & Photonic Intelligence",
    template: "%s | NSKAILabs",
  },
  description:
    "Building the Future Workforce in AI & Photonic Intelligence. Education, Software, and Research Solutions for students, researchers, and industry professionals.",
  keywords: [
    "AI",
    "Photonics",
    "Machine Learning",
    "Deep Learning",
    "AutoML",
    "Photonic Design",
    "RCWA",
    "FDTD",
    "NSKAILabs",
    "Bharat-Pro",
    "AI Education India",
  ],
  authors: [{ name: "NSKAILabs" }],
  creator: "NSKAILabs",
  metadataBase: new URL("https://nskailabs.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "NSKAILabs",
    title: "NSKAILabs - AI & Photonic Intelligence",
    description:
      "Education, Software, and Research Solutions at the intersection of AI and Photonic Engineering.",
    images: [{ url: "/NSK_logo.png", width: 512, height: 512, alt: "NSKAILabs Logo" }],
  },
  twitter: {
    card: "summary",
    title: "NSKAILabs - AI & Photonic Intelligence",
    description:
      "Education, Software, and Research Solutions at the intersection of AI and Photonic Engineering.",
    images: ["/NSK_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/NSK_logo.png",
    apple: "/NSK_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
