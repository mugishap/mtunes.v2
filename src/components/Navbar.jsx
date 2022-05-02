import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {


  const handleLogOut = async () => {
    await fetch('http://localhost:4040/user/logout', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
      .then((data) => { console.log(data); window.location.replace('/login') })
  }
  //Just a stupid comment
  return (
    <div className='overflow-hidden shadow-2xl w-full h-14 items-center flex flex-row justify-between p-2'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <Link to='/home'>
        <div className="inNav m-2 logo w-full flex flex-row items-center justify-left p-2">
          <img src={require('./../images/logo1.png')} className='w-8' alt="" />
          <span className='font-mono text-2xl logo-text'>mTunes</span>
        </div>
      </Link>
      <div className="inNav w-1/3">
        <ul className='flex w-full flex-row'>
          <li className='w-1/4 m-1 text-2xl focus:bg-blue-500'><Link to='/home'>Home</Link></li>
          <li className='w-1/4 m-1 text-2xl focus:bg-blue-500'><Link to='/charts'>Charts</Link></li>
          <li className='w-1/4 m-1 text-2xl focus:bg-blue-500'><Link to='/account'>Account</Link></li>
          <li className='w-1/4 m-1 text-2xl focus:bg-blue-500'><Link to='/about'>About us</Link></li>
        </ul>
      </div>
      <div className="inNav w-1/3 .flex">
        <Link to='/login'><button onClick={handleLogOut} className='text-2xl bg-orange-500 text-white w-1/3 ml-4 rounded'>Log out</button></Link>
      </div>
      <div className='mr-7'>
        <Link to='/settings'><i className='material-icons cursor-pointer'>settings</i></Link>
      </div>
    </div>
  )
}

export default Navbar
