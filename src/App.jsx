
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
