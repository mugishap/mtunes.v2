/* eslint-disable no-unused-vars */
import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FiSettings, FiMenu } from 'react-icons/fi'

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
  const toggleSmallSettingsBar = () => {
    const settingsNavbar = document.querySelector('.smallsettingsnav')
    const navbarSmall = document.querySelector('.smallnav')
    if (navbarSmall.classList.contains('flex')) {
      navbarSmall.classList.replace('flex', 'hidden')
    }
    settingsNavbar.classList.contains('hidden') ? settingsNavbar.classList.replace('hidden', 'flex') : settingsNavbar.classList.replace('flex', 'hidden')
  }
  const toggleSmallNavbar = () => {
    const navbarSmall = document.querySelector('.smallnav')
    const settingsNavbar = document.querySelector('.smallsettingsnav')
    if (settingsNavbar.classList.contains('flex')) {
      settingsNavbar.classList.replace('flex', 'hidden')
    }
    navbarSmall.classList.contains('hidden') ? navbarSmall.classList.replace('hidden', 'flex') : navbarSmall.classList.replace('flex', 'hidden')
  }

  return (
    <div className='relative shadow-2xl text-black w-full h-14 items-center flex flex-row sm:justify-between p-2'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className="inNav w-1/5 logo flex flex-row items-center justify-left p-2">
        <Link to='/home' className='flex items-center justify-center text-black'>
          <img src={require('./../images/logo1.png')} className='w-8' alt="" />
          <span className='font-mono text-2xl logo-text'>mTunes</span>
        </Link>
      </div>
      <div className="inNav w-2/5 h-full text-black flex items-center justify-center">
        <ul className='sm:flex hidden  w-full m-0 p-0 flex-row items-center justify-center'>
          <li className='w-1/5 mx-[1px] text-xl text-center'><Link to='/home' className='m-0 text-black hover:text-orange-500'>Home</Link></li>
          <li className='w-1/5 mx-[1px] text-xl text-center'><Link to='/charts' className='text-black hover:text-orange-500'>Charts</Link></li>
          <li className='w-1/5 mx-[1px] text-xl text-center'><Link to='/account' className='text-black hover:text-orange-500'>Account</Link></li>
          <li className='w-1/5 mx-[1px] text-xl text-center whitespace-nowrap'><Link to='/about' className='text-black hover:text-orange-500'>About us</Link></li>
        </ul>
      </div>
      <div className="inNav w-32 flex items-center justify-around">
        <Link to='/logout'><button onClick={handleLogOut} className='text-xl bg-orange-500 text-white p-2 flex items-center justify-center  ml-4 rounded-full'><BiLogOut className='-translate-x-[2px]' /></button></Link>
        <button onClick={toggleSmallSettingsBar} className='text-xl bg-orange-500 text-white p-2 flex items-center justify-center  ml-4 rounded-full'><FiSettings /></button>
        <button onClick={toggleSmallNavbar} className='sm:hidden text-xl bg-orange-500 text-white p-2 flex items-center justify-center  ml-4 rounded-full'><FiMenu /></button>
      </div>
      <nav className='smallnav hidden left-[75%] shadow-black rounded-md shadow-2xl z-10 absolute top-14 bg-white h-fit w-fit p-2'>
        <ul className='flex flex-col w-full m-0 p-0  items-start justify-center'>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center'><Link to='/home' className='m-0 hover:text-orange-500 text-black '>Home</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300  text-xl text-center'><Link to='/charts' className='text-black hover:text-orange-500'>Charts</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300  text-xl text-center'><Link to='/account' className='text-black hover:text-orange-500'>Account</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center whitespace-nowrap'><Link to='/about' className='text-black hover:text-orange-500'>About us</Link></li>
        </ul>
      </nav>
      <nav className='smallsettingsnav hidden left-[65%] shadow-black shadow-2xl rounded-md z-10 absolute top-14 bg-white h-fit w-fit p-2'>
        <ul className='flex flex-col w-full m-0 p-0  items-start justify-center'>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center'><Link to='/home' className='m-0 text-black hover:text-orange-500'>Home</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center'><Link to='/charts' className='text-black hover:text-orange-500'>Charts</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center'><Link to='/account' className='text-black hover:text-orange-500'>Account</Link></li>
          <li className='w-full rounded hover:text-white p-1 hover:bg-slate-300 text-xl text-center whitespace-nowrap'><Link to='/about' className='text-black hover:text-orange-500'>About us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
