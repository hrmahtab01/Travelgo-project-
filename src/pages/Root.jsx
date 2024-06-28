import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const Root = () => {
  return (
    <div>
        <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root
