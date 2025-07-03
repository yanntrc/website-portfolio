import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-white flex flex-col md:flex-row items-stretch justify-center relative overflow-hidden">
      
    
      <div
        className="pointer-events-none absolute top-1/2 left-[60%] w-[35vw] h-1 z-0"
        style={{
          transform: 'translate(-50%, -50%) rotate(70deg)',
          background: 'linear-gradient(to right, black 33.33%, white 33.33%)'
        }}
      />

      {/* Titre à gauche */}
      <div className="flex flex-col justify-center md:w-1/2 w-full z-10">
        <h1 className="text-left ml-10 md:ml-20 mb-12 font-mono text-3xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg animate-slide-down leading-tight tracking-wide">
          <span className="block">Hi, I'm Yann,</span>
          <span className="block mt-2">Web Developer,</span>
          <span className="block mt-2">Blockchain Developer,</span>
          <span className="block mt-2">and Electronic Music Enthusiast</span>
        </h1>
      </div>

      {/* Liens géants à droite, en blanc */}
      <div className="flex flex-col justify-center items-end md:w-1/2 w-full gap-8 pr-12 md:pr-24 z-10">
        <Link
          to="/projects"
          className="text-5xl md:text-7xl font-extrabold font-mono text-white hover:text-orange-300 transition-all duration-200 underline-offset-8 hover:underline"
          style={{ letterSpacing: '0.04em' }}
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="text-5xl md:text-7xl font-extrabold font-mono text-white hover:text-orange-300 transition-all duration-200 underline-offset-8 hover:underline"
          style={{ letterSpacing: '0.04em' }}
        >
          Blog
        </Link>
      </div>
    </div>
  );
}