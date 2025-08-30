import React from 'react'
import { Link } from 'react-router-dom'

const Maker = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-4">
      <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">🚧 Coming Soon 🚧</h1>
      <p className="text-zinc-400 text-lg sm:text-xl mb-8 max-w-2xl">
        We’re working hard to bring this feature to you. Stay tuned!
      </p>
      <Link to='/'  className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition">
        Go Back Home
      </Link>
    </div>
  )
}

export default Maker
