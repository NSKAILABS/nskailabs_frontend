import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "NSKAILabs Refund and Cancellation Policy.",
};

export default function RefundPolicy() {
  return (
    <div className="pt-16">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="section-container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Refund <span className="gradient-text">Policy</span>
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
                1. Refund Eligibility
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We want you to be satisfied with our services. If you are not
                satisfied with your purchase, you may request a refund within
                the applicable refund period as described below for each service
                type.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Photonic AI Software
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Subscription refunds for the Photonic AI Software may be
                requested within 7 days of the initial purchase or renewal. To
                be eligible, you must not have exceeded 10 simulation runs
                during the refund period. Refunds will be processed within 7-10
                business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Bharat-Pro Program
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Refund requests for the Bharat-Pro program must be submitted
                within 14 days of enrollment. If you have accessed more than
                30% of the course content, a partial refund may be offered at
                our discretion. Full refunds are available if less than 10% of
                course content has been accessed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Non-Refundable Items
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                The following are not eligible for refunds:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Custom enterprise solutions and integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Completed consulting or training sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Services rendered beyond the refund eligibility period</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. How to Request a Refund
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To request a refund, please contact our support team at
                contact@nskailabs.com with your order details and reason for
                the refund. We will review your request and respond within 3
                business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Refund Processing
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Approved refunds will be processed to the original payment
                method within 7-10 business days. Please note that your bank or
                payment provider may take additional time to reflect the refund
                in your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Contact
              </h2>
              <p className="text-gray-400 leading-relaxed">
                For refund-related queries, please contact us at
                contact@nskailabs.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
