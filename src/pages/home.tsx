import { useUser } from 'next-auth'

export default function Home() {
  const { user, loading } = useUser()

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">TrendWise Blog</h1>
      {!loading && !user && (
        <button
          onClick={() => void window.location.href='/auth/google'}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Log in with Google
        </button>
      )}
      <div className="grid gap-6 mt-8">
        {/* Article previews will be rendered here */}
      </div>
    </div>
  )
}