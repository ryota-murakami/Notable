'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold text-white mb-8 inline-block">
            Notable
          </Link>
          <h1 className="text-4xl font-light text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Effective Date: January 1, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Notable is designed with privacy as a core principle. We collect only the information necessary to provide our service:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Account information (email address, encrypted password)</li>
              <li>Your notes and documents (encrypted and stored securely)</li>
              <li>Usage analytics (anonymized and aggregated)</li>
              <li>Device information for synchronization purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your information is used exclusively to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide and maintain the Notable service</li>
              <li>Synchronize your notes across devices</li>
              <li>Improve our application through anonymized analytics</li>
              <li>Communicate important service updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We employ industry-standard security measures including end-to-end encryption for your notes, 
              secure data transmission (TLS 1.3), and regular security audits. Your data is encrypted both 
              in transit and at rest, ensuring that only you can access your notes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or share your personal information with third parties, except as 
              required by law or to protect our rights and the safety of our users. Your notes remain 
              private and are never used for advertising or shared with external parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your notes in standard formats</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy or your personal information, please contact us at:
            </p>
            <p className="text-blue-400 font-medium mt-2">privacy@notable.app</p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Return to Notable
          </Link>
        </div>
      </div>
    </div>
  )
}