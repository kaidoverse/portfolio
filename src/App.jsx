import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'


// import { Toaster } from "sonner"


const App = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='projects' element={<Projects />} />
          <Route path='blog' element={<Blog />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App