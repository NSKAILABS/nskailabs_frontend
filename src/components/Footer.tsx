import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Vision", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Photonic AI", href: "/product" },
      { label: "Bharat-Pro", href: "/bharat-pro" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Data Usage", href: "/data-usage" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/NSK_logo.png"
                alt="NSKAILabs"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold gradient-text">NSKAILabs</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Building the Future Workforce in AI & Photonic Intelligence.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 NSKAILabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
