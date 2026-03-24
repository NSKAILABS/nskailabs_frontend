import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NSKAILabs Privacy Policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-16">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="section-container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-center">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose-dark space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-400 leading-relaxed">
                NSKAILabs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our services, including the Photonic AI Software
                and Bharat-Pro platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Personal Data: Name, email address, phone number, organization, and other contact details you provide.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Usage Data: Information about how you use our website and services, including pages visited and features used.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Technical Data: IP address, browser type, device information, and cookies.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Send you technical notices, updates, and support messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Respond to your comments, questions, and requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Monitor and analyze trends, usage, and activities</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                electronic transmission over the Internet or information storage
                technology can be guaranteed to be 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We will retain your personal information only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your information to the extent necessary to
                comply with our legal obligations, resolve disputes, and enforce
                our policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-400 leading-relaxed">
                You have the right to access, update, or delete your personal
                information at any time. You may also opt out of receiving
                marketing communications from us. To exercise these rights,
                please contact us at contact@nskailabs.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-400 leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us at contact@nskailabs.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
