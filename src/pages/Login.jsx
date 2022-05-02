import { React, useState } from 'react'
import Signup from './Signup'

function Login() {
  const [login, setLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)

  const handleChangeForm = e => {
    setLogin(false)
  }
  const handleFormSubmit = async e => {
    e.preventDefault()
    setLoader(true)
    await fetch('http://localhost:4040/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // mode:'no-cors',
      credentials: 'include',
      body: JSON.stringify({
        email: (email),
        password: (password)
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.message === "Allowed to continue") {
          window.location.replace('/home')

        }
        else {
          window.alert("Either password or email is wrong try again please")
          setLoader(false)
        }
      })
  }
  return (
    <>
      {login ?

        <div className="form h-screen w-full flex flex-col items-center">
          <div className='m-auto w-1/3 flex flex-col shadow-2xl p-3 items-center'>
            <div className="inNav ml-2 mb-3 logo w-full flex flex-col items-center justify-center">
              <img src={require('./../images/logo1.png')} className='w-15' alt="" />
              <div className='font-bold text-lg overflow-hidden'>Log in to mTunes</div>
            </div>
            <form className="text-m p-2 w-full h-4/5">

              <div className="flex flex-row items-center justify-between m-2">
                <label className='w-1/3 h-6 flex justify-left'>Email:</label>
                <input type="email" name='email' className='p-1 rounded bg-gray-200 w-2/3 h-8' onChange={(e) => {
                  setEmail(e.target.value)
                }} />
              </div>
              <div className="flex flex-row items-center justify-between m-2">
                <label className='w-1/3 h-6 flex justify-left'>Password:</label>
                <input type="password" name='password' className='p-1 rounded bg-gray-200 w-2/3 h-8' onChange={(e) => {
                  setPassword(e.target.value)
                }} />
              </div>

              <div className="flex flex-col items-center justify-center m-2">
                {loader ?
                  <>
                    <p className='text-sm'>Please wait while you request is being processed</p>
                    <img className='h-12' src={require('./../images/loader.gif')} alt="" />
                  </>
                  :
                  <button type="submit" onClick={handleFormSubmit} className='shadow-2xl w-24 border-3 p-1 rounded hover:text-white hover:bg-orange-500 border'>Submit</button>

                }
              </div>
            </form>
            <div className="flex flex-row items-center justify-center overflow-hidden">
              <p>Don't have an account?</p>&nbsp;<p onClick={handleChangeForm} className='hover:text-orange-500 font-bold cursor-pointer'>Sign up</p>
            </div>
          </div>
        </div> : <Signup />
      }
    </>
  )
}

export default Login