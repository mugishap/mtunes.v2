/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Searchedloader from '../Loaders/Searchedloader'
import { checkForAccess } from './check'

// require('dotenv').config()
function Searched() {
    const params = useParams()
    const [results, setResults] = useState([])
    const [hits, setHits] = useState([])
    const [hit, setHit] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setLoader(true)
        getResults()
    }, [params.input])

    useEffect(() => {
        getResults()
    }, [])
    const getResults = async () => {
        const string = 'search/' + params.input
        const check = localStorage.getItem(string)
        if (check != null) {
            checkForAccess()
            const inLocal = JSON.parse(localStorage.getItem(string))
            setResults(inLocal)
            setHits(inLocal.tracks.hits)
            setLoader(false)
            // setArtist(inLocal.artists.hits)
            // window.location.reload()
            if (hits.length === 1) {
                setHit(hits)
            }
        }
        else {
            checkForAccess()
            const api = await fetch(`https://shazam.p.rapidapi.com/search?term=${params.input}&locale=en-US&offset=0&limit=2`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc'
                }
            })
        const data = await api.json()
        const string = 'search/' + params.input
        setResults(data)
        setHits(data.tracks.hits)
        // setArtist(data.artists.hits)
        setLoader(false)
        if (hits.length === 1) {
            setHit(hits)
        }
        localStorage.setItem(string, JSON.stringify(data))
        window.location.reload()

    }

}

return (
    <>
        {loader ? <Searchedloader /> :
            (
                <div className='h-full'>
                    <Navbar />
                    <div className="top h-30">
                        Search Query = {params.input}
                        <Searchbar />
                    </div>
                    <div className='w-4/5 m-auto'>
                        <div className='m-8'>Found {hits.length} result(s) with the word {params.input}</div>
                        <div className="types songs w-full">

                            {hits.length >= 1 && hits.map((hit) => {
                                return (
                                    <Link to={'/song/' + hit.track.key} className="w-full">
                                        <div key={hit.track.key} className="  h-2/3 flex items-center  w-4/5 content-start justify-start flex-row bg-slate-400 text-white pl-10 pr-24 m-2 rounded-l shadow-2xl ">
                                            <div className="image w-1/2 m-4"><img className='border-white border-8 rounded-l w-48 h-3/3' src={hit.track.images.coverart} alt="" /></div>
                                            <div className='description w-50 flex flex-col items-center content-between'>
                                                <form className='w-full h-full flex text-l font-bold flex-col'>
                                                    <div className='flex w-full justify-between items-center flex-row'>
                                                        <label>Name:</label>
                                                        <span>{hit.track.title}</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center flex-row'>
                                                        <label>Artist(s):</label>
                                                        <span>{hit.track.subtitle}</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center flex-row'>
                                                        <label>Subtitle:</label>
                                                        <span>{hit.track.subtitle}</span>
                                                    </div>
                                                </form>
                                                <div className="view">
                                                    <Link to={'/song/' + hit.track.key}><button className='rounded p-1 m-1 text-white mt-5 bg-orange-400'>View Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="types artists"></div>
                    </div>
                </div >

            )
        }
    </>
)
}

export default Searched