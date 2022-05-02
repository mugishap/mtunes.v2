import React from 'react'
import './Songloader.css'

function Songloader() {
    return (
        <div className=' w-full h-screen'>
            <div className=' flex flex-row m-3 border-none shadow-2xl w-full p-3'>
                <div className=" bg-gray-200 image w-1/4 flex items-center justify-center">
                    <div className='anim shadow-2xl w-4/5 h-4/5 flex items-center justify-center p-1 m-1'>
                    </div>
                </div>
                <div className="bg-gray-200 description w-2/4">
                    <form className='anim w-full'>
                        <div className="anim bg-gray-200 flex justify-around w-full items-center w-full">
                            <div className="anim bg-gray-300 h-5 m-2 w-1/4"></div>
                            <div className="anim bg-gray-300 h-5 m-2 w-1/2"></div>
                        </div>
                        <div className="anim bg-gray-200 divs flex justify-around w-full items-center w-full">
                            <div className="anim bg-gray-300 h-5 m-2 w-1/4"></div>
                            <div className="anim bg-gray-300 h-5 m-2 w-1/2"></div>
                        </div>
                        <div className='anim divs flex justify-around w-full items-center w-full'>
                            <div className="anim bg-gray-300 h-5 m-2 w-1/4"></div>
                            <div className="anim bg-gray-300 w-1/2 h-5 m-2"></div>
                        </div>
                        <div className="anim bg-gray-200 divs flex justify-around w-full items-center w-full">
                            <div className="anim bg-gray-300 h-5 m-2 w-1/4"></div>
                            <div className="anim bg-gray-300 h-5 m-2 w-1/2"></div>
                        </div>
                        <div className="anim bg-gray-200 divs flex justify-around w-full items-center w-full">
                            <div className="anim bg-gray-300 h-5 m-2 w-1/4"></div>
                            <div className="anim bg-gray-300 h-5 m-2 w-1/2"></div>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-200 artist w-1/4 flex-col flex items-center justify-center">
                    <div className='anim w-20 h-20 rounded-full bg-gray-300'></div>
                    <span className='anim bg-gray-300 h-5 m-2 w-1/2'></span>
                </div>
            </div>
            <div className="anim bg-gray-200 h-screen w-1/2 flex m-auto lyrics">
                <div className='anim bg-gray-200 text h-full w-full'>

                </div>
            </div>
        </div>
    )
}

export default Songloader