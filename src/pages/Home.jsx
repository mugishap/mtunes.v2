/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Homeloaders from '../Loaders/Homeloaders'
import './Home.css'
// require('dotenv').config()
function Home(props) {

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
    const [songs, setSongs] = useState([])
    useEffect(() => {
        getSongs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkForAccess = async () => {
        try {
            let res = await fetch('http://localhost:4040/user/checkForAccess', { method: 'GET', credentials: 'include' })
            res = await res.json()
            // console.log(res)
            setLoader(false)
            if (res.message === "#NoTokenNoEntry") {
                console.log("Token is not there")
                // window.alert('No token generated!!! Authentication gone wrong')
                window.location.replace('/login')
            }
            else if (res.message === "#FailedToParseToken") {
                window.location.replace('/login')
            } else if (res.message === "#Success") {
                // window.location.replace('/home')
            }
        } catch (e) {
            console.log("Error here", e)
        }
    }

    const getSongs = async () => {
        const check = localStorage.getItem('songs')
        if (check !== null) {
            const inLocal = JSON.parse(localStorage.getItem('songs'))
            // console.log(inLocal);
            setLoader(false)
            checkForAccess()
            setSongs(inLocal.tracks)
            // console.log(songs);
        }
        else if (check === null) {
            await fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc'
                },
                mode: 'no-cors'
            }).then(res => res.json())
                .then(data => {
                    setLoader(false)
                    checkForAccess()
                    setSongs(data.tracks)
                    // console.log(songs)
                    localStorage.setItem('songs', JSON.stringify(data))
                })
        }
    }
    useEffect(() => {
        // console.log(songs)
    }, [songs])
    return (
        <div className="body">
            <Navbar switchMode={props.switchMode} darkClass={props.darkClass} darkHandler={props.darkHandler} />
            <Searchbar />
            {loader ?
                <Homeloaders />
                :

                <div className='home grid grid-cols-5 portrait:grid-cols-2 '>

                    {shuffle(songs).map((track) => {
                        return (
                            <Link to={'/song/' + track.key} key={track.key} className='overflow-hidden'>
                                <div className='w-64  display p-2 overflow-hidden flex flex-col items-center justify-center'>
                                    <img src={track.images.coverart} className=' hover:scale-110 object-cover object-center w-4/5 h-36' alt="" />
                                    <span className='w-4/5 mt-1 flex items-center justify-start text-left'>{track.share.subject}</span>
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