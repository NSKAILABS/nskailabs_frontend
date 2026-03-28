import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NSKAILabs terms of service - rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-400">
                  By accessing or using NSKAILabs, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
                <p className="text-gray-400">
                  NSKAILabs is an open-source research community focused on nanophotonics and metasurfaces. 
                  We provide educational content, community forums, and collaborative tools for researchers 
                  and students.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
                <p className="text-gray-400">
                  To access certain features, you may need to create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us of any unauthorized use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Community Guidelines</h2>
                <p className="text-gray-400">
                  When participating in our community (Discord, comments, forums), you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
                  <li>Be respectful and constructive in all interactions</li>
                  <li>Not post spam, harassment, or harmful content</li>
                  <li>Not share others&apos; personal information without consent</li>
                  <li>Give proper attribution when sharing research or ideas</li>
                  <li>Follow applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
                <p className="text-gray-400">
                  Our open-source content is available under various open-source licenses as specified 
                  in each repository or publication. You retain ownership of any content you contribute, 
                  but grant us a license to use it within the community.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer</h2>
                <p className="text-gray-400">
                  Our services are provided &quot;as is&quot; without warranties of any kind. Educational content 
                  is for informational purposes only and should not be considered professional advice. 
                  We are not responsible for any errors or omissions in our content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
                <p className="text-gray-400">
                  To the maximum extent permitted by law, NSKAILabs shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
                <p className="text-gray-400">
                  We may terminate or suspend your access to our services at any time, without prior 
                  notice, for conduct that we believe violates these terms or is harmful to other users, 
                  us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
                <p className="text-gray-400">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  material changes by posting the new terms on this page. Continued use of our services 
                  after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
                <p className="text-gray-400">
                  If you have any questions about these terms, please contact us through our Discord 
                  community or via email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
