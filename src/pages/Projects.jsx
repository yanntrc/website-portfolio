import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-white flex flex-col animate-fade-in-slow">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-10">Projects</h2>
        <p className="text-lg text-blue-800">Here are some of my projects…</p>
      </div>
    </div>
  )
}
