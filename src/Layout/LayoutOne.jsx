import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home'

const LayoutOne = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default LayoutOne