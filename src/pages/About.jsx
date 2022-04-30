import React from 'react'
import Navbar from './../components/Navbar'

function About() {
  const checkForAccess = async () => {
    try {
      let res = await fetch('http://localhost:4040/user/checkForAccess', { method: 'GET', credentials: 'include' })
      res = await res.json()
      console.log(res)
      if (res.message === "#NoTokenNoEntry") {
        console.log("Token is not there")
        // window.alert('No token generated!!! Authentication gone wrong')
        window.location.replace('/login')
      }
      else if (res.message === "#FailedToParseToken") {
        window.location.replace('/login')
      } else if (res.message === "#Success") {
        // window.location.replace('/home')
      }
    } catch (e) {
      console.log("Error here", e)
    }
  }

  checkForAccess()

  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='bg-slate-200 h-3/5 mt-32 w-full p-4 flex items-center justify-center flex-col'>
        <p> mTunes is a website dedicated to giving you different song details and lyrics.
          You ca reach us through reaching us through.</p>
        <div className='links w-full h-1/2'>
          <div className='sm-link '></div>
          <div className='sm-link '></div>
          <div className='sm-link '></div>
          <div className='sm-link '></div>
          <div className='sm-link '></div>
        </div>
      </div>
    </div>
  )
}

export default About