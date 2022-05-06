import React from 'react'
import Navbar from './../components/Navbar'
import { checkForAccess } from './check'

function Settings() {
  checkForAccess()
  return (
    <div className='flex flex-col w-screen h-96'>
      <Navbar />
      <div className='flex w-full flex-row items-center mt-16 justify-center'>
        <div className='w-1/2 flex flex-col items-center justify-center'>
          <p>Account:</p>
          <button className='bg-orange-500 h-8 text-white w-36 rounded'>Delete account</button>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center'>
          <p>Upcoming features:</p>
          <div>
            <ol className='list-disc'>
              <li>Dark mode</li>
              <li>Updating account</li>
              <li>Searching users</li>
              <li>Deleting account</li>
              {/* <li></li> */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings