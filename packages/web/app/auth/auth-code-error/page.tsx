import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Failed
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Something went wrong during the authentication process
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">
              Sorry, we couldn&apos;t complete your authentication. This could be due to:
            </p>
            <ul className="mt-2 text-xs text-red-500 list-disc list-inside">
              <li>The authentication link has expired</li>
              <li>The link has already been used</li>
              <li>There was a temporary server error</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try signing in again
            </Link>
            
            <Link
              href="/signup"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}