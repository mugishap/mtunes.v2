/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Accountloader from '../Loaders/Accountloader'
import { checkForAccess } from './check'

function Account(props) {
  const { darkClass, darkHandler } = props
  const [user, setUser] = useState()
  const [loader, setLoader] = useState(true)

  const append = () => {
    const err = document.createElement('div')
    const msg = document.createTextNode("Feature not yet available")
    err.append(msg)

    document.querySelector('.form').appendChild(err)
    setTimeout(() => {
      err.style.display = 'none'
    }, 2000)
  }



  useEffect(() => {
    checkForAccess()
    const data = JSON.parse(localStorage.getItem('userInfo'))
    setUser(data)
    setLoader(false)
  }, [])

  const handleUpdateForm = e => {
    e.preventDefault()
  }
  return (
    <>
      <Navbar />
      {
        loader ?
          <Accountloader /> :
          (
            <div className={`${darkClass} w-full h-full flex flex-col items-center justify-center`}>
              <div className='w-1/3 h-3/5 mt-24 bg-slate-100 flex flex-col rounded items-center p-2'>

                <img src={user.secureUrl} className='image h-24 w-24 bg-slate-100 rounded-full' alt="" />

                <div className="form w-11/12 h-4/5 mt-8">
                  <form className='w-full h-full flex flex-col' onSubmit={handleUpdateForm}>
                    <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                      <label className='w-1/3'>Name: </label>
                      <input readOnly={true} type='text' value={user.name} className='overflow-hidden w-3/5 bg-slate-100 rounded p-1' />
                    </div>
                    <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                      <label className='w-1/3'>Username: </label>
                      <input readOnly={true} type='text' value={user.username} className='overflow-hidden w-3/5 bg-slate-100 rounded p-1' />
                    </div>
                    <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                      <label className='w-1/3'>Email: </label>
                      <input readOnly={true} type='text' value={user.email} className='overflow-hidden w-3/5 bg-slate-100 rounded p-1' />
                    </div>
                    <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                      <label className='w-1/3'>Country: </label>
                      <input readOnly={true} type='text' value={user.country} className='overflow-hidden w-3/5 bg-slate-100 rounded p-1' />
                    </div>
                    <div className="labels flex flex-row items-center justify-center m-3 overflow-hidden">
                      <button className='bg-orange-200 shadow-2xl hover:text-white hover:bg-orange-500 p-1 rounded' onClick={append}>Edit profile</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
      }
    </>)
}

export default Account