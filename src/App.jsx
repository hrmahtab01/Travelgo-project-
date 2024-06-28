import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route, Router } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogDetais from './pages/BlogDetais'
import Placerouter from './pages/Placerouter'
import Nopage from './pages/Nopage'

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path=' /Blogs'element={<Blogs/>} ></Route>
        <Route path='/Blogs/:id' element={<BlogDetais/>}></Route>
        <Route path='/place' element={<Placerouter/>}></Route>
        <Route path='*' element={<Nopage/>}></Route>


      </Route>
    )
  )
  return<RouterProvider router={router}/>
}

export default App
