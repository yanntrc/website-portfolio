import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import './App.css'

function App() {
  

  return (
    
  <BrowserRouter>
      <nav style={{
        display: 'flex',
        gap: 22,
        justifyContent: 'center',
        margin: '2rem 0'
      }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="space-y-4 p-8">
  <p className="text-red-500 font-bold text-lg">Ceci est un texte rouge</p>
  <p className="text-green-500 font-semibold">Ceci est un texte vert</p>
  <p className="text-blue-500 text-xl">Ceci est un texte bleu</p>
  <p className="text-purple-600 italic">Ceci est un texte violet</p>
  <p className="text-yellow-400 underline">Ceci est un texte jaune</p>
</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
