import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element:<About/>
//     },
//     {
//       path: "contactUs",
//       element:<ContactUs/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={ <Home/>} />
      <Route path='about' element={ <About/>} />
      <Route path='contactUs' element={ <ContactUs/>} />
      <Route path='user/:userid' element={ <User/>} />
      <Route loader={githubInfoLoader} path='GitHub' element={<GitHub />} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>,
)
