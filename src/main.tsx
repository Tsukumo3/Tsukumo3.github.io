import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Blog from './pages/Blog.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import PortfolioDetail from './components/PortfolioDetail.tsx'
import Home from './pages/Home.tsx'

import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'
import './styles/style.css'
import './styles/markdown.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:id", // 新しく追加
        element: <PortfolioDetail />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)