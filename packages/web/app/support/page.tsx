'use client'

import Link from 'next/link'

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold text-white mb-8 inline-block">
            Notable
          </Link>
          <h1 className="text-4xl font-light text-white mb-4">Support Center</h1>
          <p className="text-gray-300">Get help with Notable and make the most of your note-taking experience</p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* FAQ Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How do I sync my notes across devices?</h3>
                <p className="text-gray-300 text-sm">Your notes automatically sync when you're signed in to your Notable account. Make sure you're connected to the internet and logged in on all devices.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Can I export my notes?</h3>
                <p className="text-gray-300 text-sm">Yes! You can export your notes in various formats including Markdown, PDF, and plain text from the Settings menu.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Is my data secure?</h3>
                <p className="text-gray-300 text-sm">Absolutely. All your notes are encrypted end-to-end, and we follow industry-standard security practices to protect your data.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How do I organize my notes?</h3>
                <p className="text-gray-300 text-sm">Use tags, folders, and our powerful search feature to organize and find your notes quickly. You can also favorite important notes for easy access.</p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email Support</h3>
                  <p className="text-gray-300 text-sm mb-2">For technical issues and account help</p>
                  <a href="mailto:support@notable.app" className="text-blue-400 hover:text-blue-300 text-sm">support@notable.app</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Community Forum</h3>
                  <p className="text-gray-300 text-sm mb-2">Connect with other Notable users</p>
                  <span className="text-gray-500 text-sm">Coming soon</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📚</div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Documentation</h3>
                  <p className="text-gray-300 text-sm mb-2">Comprehensive guides and tutorials</p>
                  <span className="text-gray-500 text-sm">Coming soon</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🐛</div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Bug Reports</h3>
                  <p className="text-gray-300 text-sm mb-2">Report issues and help us improve</p>
                  <span className="text-gray-500 text-sm">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Quick Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⌨️</div>
              <h3 className="text-lg font-medium text-white mb-2">Keyboard Shortcuts</h3>
              <p className="text-gray-300 text-sm">Use Ctrl+N for new notes, Ctrl+S to save, and Ctrl+F to search</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🏷️</div>
              <h3 className="text-lg font-medium text-white mb-2">Smart Tagging</h3>
              <p className="text-gray-300 text-sm">Type # followed by a tag name to quickly categorize your notes</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-medium text-white mb-2">Advanced Search</h3>
              <p className="text-gray-300 text-sm">Use filters like tag:work or date:today to find specific notes</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
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