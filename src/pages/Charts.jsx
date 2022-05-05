/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Homeloaders from './../Loaders/Homeloaders'
import './Home.css'
// require('dotenv').config()
function Home() {
    const [loader, setLoader] = useState(true)

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    const checkForAccess = async () => {
        try {
            let res = await fetch('https://mtunes-backend.herokuapp.com/user/checkForAccess', { method: 'GET', credentials: 'include' })
            res = await res.json()
            console.log(res)
            if (res.message === "#NoTokenNoEntry") {
                console.log("Token is not there")
                window.alert('No token generated!!! Authentication gone wrong')
                window.location.replace('/login')
            }
            else if (res.message === "#FailedToParseToken") {
                window.location.replace('/login')
            } else if (res.message === "#Success") {
                // window.location.replace('/charts')
            }
        } catch (e) {
            console.log("Error here", e)
        }
    }

    const [songs, setSongs] = useState([])

    useEffect(() => {
        checkForAccess()
        getSongs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getSongs = async () => {
        checkForAccess()
        const check = localStorage.getItem('chartSongs')
        if (check !== null) {
            const inLocal = JSON.parse(localStorage.getItem('chartSongs'))
            // console.log(inLocal);
            setSongs(inLocal.tracks)
            // console.log(songs);
            setLoader(false)
        }
        else if (check === null) {
            checkForAccess()
            await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc'
                }
            }).then(res => res.json())
                .then(data => {
                    setSongs(data.tracks)
                    // console.log(songs)
                    localStorage.setItem('chartSongs', JSON.stringify(data))
                    setLoader(false)
                })
        }
    }
    useEffect(() => {
        // console.log(songs)
    }, [songs])
    return (
        <div className="body w-screen">
            <Navbar />
            <Searchbar />
            {
                loader ?
                    <Homeloaders />
                    :
                    <div className='home grid grid-cols-4 w-full items-center'>

                        {shuffle(songs).map((track) => {
                            return (
                                <Link to={'/song/' + track.key} className='overflow-hidden w-8/12'>
                                    <div key={track.key} className='display w-full flex items-center overflow-hidden flex-col justify-center'>
                                        <img src={track.images.coverart} className='object-center object-cover w-full  hover:scale-110 h-36 overflow-hidden' alt="" />
                                        <span className='w-4/5 flex items-center justify-start text-left overflow-hidden'>{track.share.subject}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

            }

        </div>
    )
}

export default Home