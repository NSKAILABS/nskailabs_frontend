import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "NSKAILabs Terms and Conditions of service.",
};

export default function Terms() {
  return (
    <div className="pt-16">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="section-container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-400 text-center">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing and using the NSKAILabs website and services,
                including the Photonic AI Software and Bharat-Pro platform, you
                agree to be bound by these Terms and Conditions. If you do not
                agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Services
              </h2>
              <p className="text-gray-400 leading-relaxed">
                NSKAILabs provides AI and photonics-related educational
                programs, software tools, and research solutions. Our services
                include but are not limited to the Photonic AI SaaS platform,
                the Bharat-Pro AutoML training program, and associated
                educational content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To access certain features, you may be required to create an
                account. You are responsible for maintaining the confidentiality
                of your account credentials and for all activities that occur
                under your account. You agree to notify us immediately of any
                unauthorized use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-400 leading-relaxed">
                All content, software, and materials available through our
                services are the intellectual property of NSKAILabs or its
                licensors. You may not reproduce, distribute, modify, or create
                derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Subscription and Payments
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Certain services require paid subscriptions. All fees are quoted
                in Indian Rupees (INR) and are subject to applicable taxes.
                Payment terms, billing cycles, and cancellation policies are
                specified at the time of subscription.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-400 leading-relaxed">
                NSKAILabs shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of or inability to use our services. Our total liability
                shall not exceed the amount paid by you for the service in the
                twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Governing Law
              </h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising from these terms
                shall be subject to the exclusive jurisdiction of the courts in
                India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on this page. Your
                continued use of our services constitutes acceptance of the
                modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Contact
              </h2>
              <p className="text-gray-400 leading-relaxed">
                For questions about these Terms, please contact us at
                contact@nskailabs.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
