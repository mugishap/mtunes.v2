import React from 'react'

function Accountloader() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='w-1/3 h-3/5 mt-24 bg-slate-100 flex flex-col rounded items-center p-2'>
                <div className="anim image h-24 w-24 bg-slate-300 rounded-full">
                </div>
                <div className="form w-11/12 h-4/5 mt-8">
                    <form className='w-full h-full flex flex-col'>
                        <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                          <div className=' anim w-1/3 bg-slate-300 h-8 rounded'></div>
                            <input readOnly={true} type='text' className= 'anim overflow-hidden w-3/5 bg-slate-300 rounded p-1'/>
                        </div>
                        <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                          <div className=' anim w-1/3 bg-slate-300 h-8 rounded'></div>
                            <input readOnly={true} type='text' className= 'anim overflow-hidden w-3/5 bg-slate-300 rounded p-1'/>
                        </div>
                        <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                          <div className=' anim w-1/3 bg-slate-300 h-8 rounded'></div>
                            <input readOnly={true} type='text' className= 'anim overflow-hidden w-3/5 bg-slate-300 rounded p-1'/>
                        </div>
                        <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                          <div className=' anim w-1/3 bg-slate-300 h-8 rounded'></div>
                            <input readOnly={true} type='text' className= 'anim overflow-hidden w-3/5 bg-slate-300 rounded p-1'/>
                        </div>
                        <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                          <div className=' anim w-1/3 bg-slate-300 h-8 rounded'></div>
                            <input readOnly={true} type='password' className='anim w-3/5 bg-slate-300 rounded p-1 overflow-hidden'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Accountloader