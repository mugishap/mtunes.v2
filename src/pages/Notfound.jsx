import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className='w-full h-screen p-4'>
            <div className="lost h-1/3 w-2/3 shadow-2xl m-auto flex flex-col items-center justify-center">
                <div className="lost h-1/3 w-2/3 text-2xl text-red-500 font-bold ml-auto mr-auto flex flex-col items-center justify-center">
                    404
                    <i className='bx bxs-moon m-5'></i>
                </div>
                <div className="lost h-1/3 w-2/3 ml-auto mr-auto flex flex-row items-center justify-center">
                <p>Looks like you lost your way.Try going back&nbsp;</p>
                <Link to='/home' className='text-green-500'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Notfound