import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
            <h1 className="text-2xl font-semibold">Augusta</h1>
          </div>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-4xl font-extrabold mb-4">A modern UI dashboard starter</h2>
          <p className="text-gray-600 mb-8">Clean, responsive, and built with React + Vite + Tailwind. Click below to enter the dashboard preview.</p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:shadow-md transition"
            >
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
