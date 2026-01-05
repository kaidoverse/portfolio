import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import UserLayout from './components/layout/UserLayout'


// import { Toaster } from "sonner"


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
        <Route path='resume' element={<Resume />} />
      </Route>
    </Routes>


  )
}

export default App