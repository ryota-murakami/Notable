'use client'

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold text-white mb-8 inline-block">
            Notable
          </Link>
          <h1 className="text-4xl font-light text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300">Effective Date: January 1, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By using Notable, you agree to these Terms of Service. If you do not agree to these terms, 
              please do not use our service. These terms may be updated from time to time, and continued 
              use of the service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              Notable is a note-taking and knowledge management application that allows you to create, 
              organize, and sync your notes across multiple devices. We provide rich text editing, 
              advanced search, tagging, and collaboration features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use Notable, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and current information</li>
              <li>Notifying us of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to use Notable for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Illegal activities or content that violates applicable laws</li>
              <li>Harassment, abuse, or harmful content toward others</li>
              <li>Spam, malware, or other disruptive activities</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Violating intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Content Ownership</h2>
            <p className="text-gray-300 leading-relaxed">
              You retain ownership of all content you create in Notable. We do not claim ownership 
              of your notes, documents, or other content. However, you grant us a limited license 
              to store, process, and transmit your content solely to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Service Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              While we strive for high availability, we cannot guarantee uninterrupted service. 
              We may temporarily suspend service for maintenance, updates, or technical issues. 
              We recommend regular backups of your important content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Notable is provided "as is" without warranties of any kind. We are not liable for 
              any indirect, incidental, or consequential damages arising from your use of our service. 
              Our total liability is limited to the amount you paid for the service in the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              You may terminate your account at any time. We may terminate accounts that violate 
              these terms. Upon termination, you will lose access to your content unless you export 
              it beforehand. We provide data export tools for this purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-blue-400 font-medium mt-2">legal@notable.app</p>
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