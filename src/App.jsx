import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import UserLayout from './components/UserLayout'
import SingleBlog from './pages/SingleBlog'


// import { Toaster } from "sonner"


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blogs />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
      </Route>
    </Routes>


  )
}

export default App