import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: {
    default: "NSKAILabs - Open-Source Nanophotonics Research",
    template: "%s | NSKAILabs",
  },
  description:
    "Open-source research community exploring the frontiers of metasurfaces, flat optics, and computational photonics. Join researchers and students worldwide.",
  keywords: [
    "nanophotonics",
    "metasurfaces",
    "flat optics",
    "computational photonics",
    "open source",
    "research community",
    "physics",
    "optics",
    "photonic design",
  ],
  authors: [{ name: "NSKAILabs" }],
  creator: "NSKAILabs",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nskailabs.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NSKAILabs",
    title: "NSKAILabs - Open-Source Nanophotonics Research",
    description:
      "Open-source research community exploring metasurfaces, flat optics, and computational photonics.",
    images: [{ url: "/NSK_logo.png", width: 512, height: 512, alt: "NSKAILabs Logo" }],
  },
  twitter: {
    card: "summary",
    title: "NSKAILabs - Open-Source Nanophotonics Research",
    description:
      "Open-source research community exploring metasurfaces and computational photonics.",
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
      <body className="font-sans antialiased">
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
