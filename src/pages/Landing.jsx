import React from 'react'
import CustomerSlider from '../components/CustomerSlider';


function Landing() {

    return (
        <div className='home w-screen'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>

            <div className="navbar box-border mb-8 w-11/12 flex m-3 p-3 rounded-lg outline-white">
                <div className='font-bold text-2xl flex items-center w-1/3 justify-center '>
                    <img className='w-12 h-12' src={require('./../images/logo1.png')} alt="" />
                    mTunes
                </div>
                <div className='flex text-lg items-center w-1/3 justify-center '>
                    <ul className='flex items-center justify-center'>
                        <li className='p-3 hover:text-purple-600 cursor-pointer font-[500]'>Key Benefits</li>
                        <li className='p-3 hover:text-purple-600 cursor-pointer font-[500]'>Testimonials</li>
                        <li className='p-3 hover:text-purple-600 cursor-pointer font-[500]'>Features</li>
                        <li className='p-3 hover:text-purple-600 cursor-pointer font-[500]'>Pricing</li>
                    </ul>
                </div>
                <div className='flex items-center w-1/3 justify-center '>
                    <a className='font-bold w-full h-full ' href="/signup"><button className=' p-3 hover:bg-orange-500 hover:scale-105 rounded-xl outline white text-white bg-black'>SIGN UP</button></a>
                </div>
            </div>
            <div className="main w-full mt- flex flex-col items-center  h-fit">
                <div className="w-full flex flex-row  items-center justify-between">
                    <div className='h-fit flex w-1/2  items-center justify-center'>
                        <span className=' w-full mb-4 text-8xl font-bold'><p className='listening h-32'>Listening</p> is<br></br>
                            Everything</span>
                    </div>
                    <div className='w-1/2 h-full flex items-center justify-center'>
                        <img className='hover:rotate-12 rounded-md' src={require('./../images/hero.png')} alt="" />
                    </  div>
                </div>
                <div className="benefits w-full">
                    <h1 className='mb-4 text-5xl font-bold whitespace-nowrap'>Our<p className="listening inline"> Classic Benefits</p><br></br>
                        for your music</h1>
                </div>
                <div className="flex items-center  justify-around w-11/12">
                    <div className='hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4'>
                        <div className='flex items-start justify-center rounded-full w-[55px] mb-8 h-[55px] bg-gray-800'><i className='bi-emoji-smile' style={{ 'font-size': '2rem', 'color': 'orange' }}></i></div>
                        <h1 className='text-white font-bold text-2xl mb-4'>Reduces stress
                        </h1>
                        <span className='text-xl text-white'>
                            Research has found that listening to music can relieve stress by triggering biochemical stress reducers.</span>
                    </div>
                    <div className='hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4'>
                        <div className='flex items-start justify-center rounded-full w-[55px] mb-8 h-[55px] bg-gray-800'><i className='bi-emoji-heart-eyes' style={{ 'font-size': '2rem', 'color': 'red' }}></i></div>
                        <h1 className='text-white font-bold text-2xl mb-4'>Heart healthy
                        </h1>
                        <span className='text-xl text-white'>
                            Music can boost the brain&apos;s production of the hormone dopamine.</span>

                    </div>
                    <div className='hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4'>
                        <div className='flex items-start justify-center rounded-full w-[55px] mb-8 h-[55px] bg-gray-800'><i className='bi-emoji-sunglasses' style={{ 'font-size': '2rem', 'color': '#a213e5' }}></i></div>
                        <h1 className='text-white font-bold text-2xl mb-4'>Elevates mood</h1>
                        <span className='text-xl text-white'>
                            It can reduce heart rate, lower blood pressure, and increase serotonin levels in the blood.
                        </span>
                    </div>
                </div>
                <div className="customers mt-16 ">
                    <h1 className='w-full mb-4 text-4xl font-bold'>What <p className='inline listening'>Customers </p>
                        say about us</h1>
                    <CustomerSlider />
                </div>
                <div className="flex items-center justify-center"></div>
            </div>
        </div>
    )
}

export default Landing
