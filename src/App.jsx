import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Le contenu principal */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {/* Footer toujours en bas */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-6 py-4 z-50">
        <a
          href="https://github.com/yanntrc"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition"
          aria-label="GitHub"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="fill-gray-700 hover:fill-orange-500 transition">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.868 8.185 6.839 9.504.5.092.682-.217.682-.482
              0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608
              1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.252-4.555-1.113-4.555-4.951
              0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.269.098-2.646 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004
              1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.377.203 2.393.1 2.646.64.699 1.028 1.593
              1.028 2.686 0 3.847-2.337 4.696-4.565 4.944.36.31.68.923.68 1.861 0 1.343-.012 2.427-.012 2.758
              0 .267.18.579.688.481C19.135 20.202 22 16.447 22 12.02 22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/troadec-yann-63885a203/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition"
          aria-label="LinkedIn"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="fill-gray-700 hover:fill-orange-500 transition">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.65 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75.97 0 1.76.78 1.76 1.75 0 .97-.79 1.76-1.76 1.76zm13.15 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.89v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z"/>
          </svg>
        </a>
      </footer>
    </div>
  );
}