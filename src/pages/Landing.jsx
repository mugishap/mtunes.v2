import React from 'react'

function Landing() {
    return (
        <div className='home w-screen'>
            <div className="navbar mb-8 w-full flex m-3 p-3 rounded-lg outline-white">
                <div className='font-bold text-2xl flex items-center w-1/3 justify-center '>
                    <img className='w-12 h-12' src={require('./../images/logo1.png')} alt="" />
                    mTunes
                </div>
                <div className='flex text-lg items-center w-1/3 justify-center '>
                    <ul className='flex items-center justify-center'>
                        <li className='p-3'>Key Benefits</li>
                        <li className='p-3'>Testimonials</li>
                        <li className='p-3'>Features</li>
                        <li className='p-3'>Pricing</li>
                    </ul>
                </div>
                <div className='flex items-center w-1/3 justify-center '>
                    <a className='font-bold w-full h-full ' href="/signup"><button className=' p-3 hover:bg-orange-500 hover:scale-105 rounded-xl outline white text-white bg-black'>SIGN UP</button></a>
                </div>
            </div>
            <div className="main w-full h-screen">
                <div className="w-full mt-12 flex flex-row  items-center justify-between">
                    <div className='h-fit flex w-1/2  items-center justify-center'>
                        <span className='overflow-hidden w-full mb-4 text-8xl font-bold'><p className=''>Listening</p> is<br></br>
                            Everything</span>
                    </div>
                    <div className='w-1/2 h-full flex items-center justify-center'>
                        <img src={require('./../images/hero.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
