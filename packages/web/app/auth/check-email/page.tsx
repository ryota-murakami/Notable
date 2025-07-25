import Link from 'next/link'

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Check Your Email</h1>
        
        <p className="text-gray-300 mb-6">
          We've sent you an email with a confirmation link. Please check your inbox and click the link to verify your account.
        </p>
        
        <p className="text-sm text-gray-400 mb-6">
          Didn't receive an email? Check your spam folder or try signing up again.
        </p>
        
        <Link 
          href="/auth/sign-in" 
          className="inline-block bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  )
}