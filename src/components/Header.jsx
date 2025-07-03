// src/components/Header.jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-8 z-20">
      <Link
        to="/"
        className="group relative"
        style={{ width: 56, height: 56, display: 'block' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black rounded-xl group-hover:bg-orange-500 transition"
          style={{
            transform: 'rotate(45deg)',
            width: 56,
            height: 56,
          }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
          style={{ transform: 'rotate(-45deg)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 12L12 5l9 7" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M5 10v8a1 1 0 0 0 1 1h3v-4h4v4h3a1 1 0 0 0 1-1v-8" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </span>
      </Link>
    </div>
  )
}