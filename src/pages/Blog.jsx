import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-white flex flex-col animate-fade-in-slow">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10">Blog</h2>
        <p className="text-lg text-gray-800">Welcome to my blog! Here you'll find my latest articles…</p>
      </div>
    </div>
  )
}