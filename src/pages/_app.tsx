import { useState } from 'react'
import { GoogleProvider, useUser } from 'next-auth'

export default function MyApp({ Component, pageProps }) {
  const [user, loading] = useUser()

  return (
    <GoogleProvider>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          {loading ? null : user?.error ? (
            <p>Authentication error: {user.error}</p>
          ) : (
            <Component {...pageProps} />
          )}
        </main>
      </div>
    </GoogleProvider>
  )
}