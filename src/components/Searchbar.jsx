/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Searchbar() {
    const [searched, setSearched] = useState([])


    useEffect(() => {
        setSearched()
    }, [])


    return (
        <div className='w-full h-full m-3 p-2 flex items-left flex-col justify-start'>
            <div>Quick Search</div>
            <form className='w-full h-full flex items-center justify-center' onSubmit={() => { window.location.replace('/search/song/' + searched) }}>
                <input type="text" onChange={(e) => { setSearched(e.target.value) }} className='bg-orange-200 rounded box-border h-8 p-2 input w-1/3' />
                <Link to={'/search/song/' + searched}><button type='submit'><i className='translate-y-1 text-3xl bx bx-search'></i></button></Link>
            </form>

        </div>
    )
}

export default Searchbar