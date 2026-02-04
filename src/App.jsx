import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import UserLayout from './components/UserLayout';
import SingleBlog from './pages/SingleBlog';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* scrolls to top on route change */}
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='blog' element={<Blogs />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="projects/:slug" element={<CaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
