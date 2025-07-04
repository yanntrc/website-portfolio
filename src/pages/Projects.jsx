import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import CaesarDecryptor from '../utils/CaesarDecryptor'; 

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-white flex flex-col animate-fade-in-slow">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-10">Projects</h2>
        <p className="text-lg text-blue-800 mb-8">Here are some of my projects…</p>

        {/* Grid de projets */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-6">
          {/* Project 1: Decryptor */}
          <ProjectCard
            title="Caesar Cipher Decryptor"
            description="A tool to automatically decode Caesar-encrypted messages in English."
          >
            {/* <CaesarDecryptor /> */}
            <CaesarDecryptor />
          </ProjectCard>

        </div>
      </div>
    </div>
  )
}