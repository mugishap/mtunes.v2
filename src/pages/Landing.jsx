import React from 'react'

function Landing() {
    return (
        <div className='flex flex-row h-screen -mb-16 items-start justify-center w-screen'>
            <div className='w-1/2 h-full flex flex-col jusitify-center'>
                <span className='text-4xl overflow-hidden m-auto'>Welcome to <span className='mtunes-landing-text text-4xl'>mTunes</span> </span>
                <span className='text-4xl overflow-hidden m-auto'>The world of music <span className='mtunes-landing-text text-4xl'>mTunes</span> </span>
            </div>
            <div className='w-1/2 flex-jusitify-center'></div>
        </div>
    )
}

export default Landing