/* eslint-disable no-unused-vars */
import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {


  const handleLogOut = async () => {
    const api = await fetch('http://localhost:4040/user/logout', {
      method: 'GET',
      //credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await api.json()
    localStorage.removeItem('token')
    //console.log(data)
    window.location.replace('/login')
  }

  return (
    <div className='overflow-hidden shadow-2xl text-black w-full h-14 items-center flex flex-row justify-between p-2'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className="inNav w-1/5 logo flex flex-row items-center justify-left p-2">
        <Link to='/home' className='flex items-center justify-center text-black'>
          <img src={require('./../images/logo1.png')} className='w-8' alt="" />
          <span className='font-mono text-2xl logo-text'>mTunes</span>
        </Link>
      </div>
      <div className="inNav w-2/5 h-full text-black flex items-center justify-center">
        <ul className='flex w-full m-0 p-0 flex-row items-center justify-center'>
          <li className='w-1/4 mx-[10px] text-xl text-center'><Link to='/home' className='m-0 text-black hover:text-orange-500'>Home</Link></li>
          <li className='w-1/4 mx-[10px] text-xl text-center'><Link to='/charts' className='text-black hover:text-orange-500'>Charts</Link></li>
          <li className='w-1/4 mx-[10px] text-xl text-center'><Link to='/account' className='text-black hover:text-orange-500'>Account</Link></li>
          <li className='w-1/4 mx-[10px] text-xl text-center whitespace-nowrap'><Link to='/about' className='text-black hover:text-orange-500'>About us</Link></li>
        </ul>
      </div>
      <div className="inNav w-1/5 .flex">
        <Link to='/logout'><button onClick={handleLogOut} className='text-xl bg-orange-500 text-white p-1 ml-4 rounded'>Log out</button></Link>
      </div>
      <div className='mr-7'>
        <Link to='/settings' className='text-black'><i className='material-icons cursor-pointer'>settings</i></Link>
      </div>
    </div>
  )
}

export default Navbar
