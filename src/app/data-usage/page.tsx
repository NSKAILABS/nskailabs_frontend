import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Usage Policy",
  description: "NSKAILabs Data Usage Policy - how we handle data in our AutoML and AI platforms.",
};

export default function DataUsage() {
  return (
    <div className="pt-16">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
        <div className="section-container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Data Usage <span className="gradient-text">Policy</span>
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
                1. Overview
              </h2>
              <p className="text-gray-400 leading-relaxed">
                This Data Usage Policy explains how NSKAILabs handles data
                uploaded, processed, and generated through our services,
                particularly the Bharat-Pro AutoML platform and Photonic AI
                Software. We are committed to transparency in how your data is
                used throughout our systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. AutoML Data Processing (Bharat-Pro)
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                When you use the Bharat-Pro AutoML platform:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Uploaded datasets are processed solely for the purpose of model training and evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Your data is not shared with third parties or used for any purpose other than the services you have requested.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Automated preprocessing steps (cleaning, encoding, scaling) are performed on your data within our secure infrastructure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Model outputs, evaluation metrics, and trained models belong to you.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Photonic AI Software Data
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                For the Photonic AI Software platform:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Design parameters and simulation configurations are stored securely in your account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Simulation results and GDS exports are accessible only to you and your authorized team members.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">--</span>
                  <span>Aggregated, anonymized usage data may be used to improve our AI models and platform performance.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Storage and Security
              </h2>
              <p className="text-gray-400 leading-relaxed">
                All data is stored on secure servers with encryption at rest
                and in transit. We implement industry-standard security
                measures including access controls, regular security audits,
                and monitoring. Data is stored in compliance with applicable
                data protection regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Uploaded datasets and trained models are retained for the
                duration of your active subscription. Upon subscription
                cancellation, your data will be retained for 30 days, after
                which it will be permanently deleted. You may request immediate
                deletion at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data Export
              </h2>
              <p className="text-gray-400 leading-relaxed">
                You have the right to export your data at any time. This
                includes uploaded datasets, trained models, simulation results,
                and GDS exports. Export functionality is available through your
                account dashboard.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Third-Party Services
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We may use third-party cloud infrastructure providers for data
                processing and storage. These providers are bound by strict
                data processing agreements and are required to maintain
                equivalent or higher security standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Contact
              </h2>
              <p className="text-gray-400 leading-relaxed">
                For questions about data usage, please contact us at
                contact@nskailabs.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
