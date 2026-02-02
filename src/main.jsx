import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const savedTheme = localStorage.getItem("theme") || "system";
const root = document.documentElement;

savedTheme === "dark"
  ? root.setAttribute("data-theme", "dark")
  : savedTheme === "light"
    ? root.removeAttribute("data-theme")
    : window.matchMedia("(prefers-color-scheme: dark)").matches &&
    root.setAttribute("data-theme", "dark");



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
