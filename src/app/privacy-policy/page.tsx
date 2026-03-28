import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NSKAILabs privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                <p className="text-gray-400">
                  We collect information you provide directly to us, such as when you create an account, 
                  update your profile, or communicate with us. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                  <li>Email address</li>
                  <li>Name and profile information</li>
                  <li>Institution and research interests</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                <p className="text-gray-400">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about research updates and community news</li>
                  <li>Protect against abuse and unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h2>
                <p className="text-gray-400">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                  <li>With your consent or at your direction</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
                <p className="text-gray-400">
                  We take reasonable measures to help protect your personal information from loss, theft, 
                  misuse, and unauthorized access. However, no method of transmission over the Internet 
                  is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
                <p className="text-gray-400">
                  You may update, correct, or delete your account information at any time by logging 
                  into your dashboard. You may also request deletion of your account by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
                <p className="text-gray-400">
                  We use cookies and similar technologies to maintain your session and remember your 
                  preferences. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
                <p className="text-gray-400">
                  We may update this privacy policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the date above.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about this privacy policy, please contact us through our 
                  Discord community or via email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
