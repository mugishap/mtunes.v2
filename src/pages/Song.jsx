/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, React } from 'react'
import { useParams } from 'react-router-dom'
import './Song.css'
import Navbar from '../components/Navbar'
import Songloader from './../Loaders/Songloader'
function Song() {
    const params = useParams()
    let song = []
    let lyrics = []
    const [loader, setLoader] = useState(true)


    const checkForAccess = async () => {
        try {
            let res = await fetch('https://mtunes-backend.herokuapp.com/user/checkForAccess', { method: 'GET', credentials: 'include' })
            res = await res.json()
            // console.log(res)
            if (res.message === "#NoTokenNoEntry") {
                console.log("Token is not there")
                window.alert('No token generated!!! Authentication gone wrong')
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




    getSong()

    async function getSong() {
        checkForAccess()
        const string = 'song' + params.id
        const check = localStorage.getItem(string)
        if (check != null) {
            const inLocal = await JSON.parse(check)
            song = inLocal
            // console.log(song);
            lyrics = (song.sections[1].text)
            setLoader(false)
        }

        else {
            // console.log("check is null")
            checkForAccess()
            const api = await fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${params.id}&locale=en-US`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc'
                }
            })
            // console.log(api);
            const data = await api.json()
            song = data;
            const string = 'song' + params.id
            localStorage.setItem(string, JSON.stringify(data))
            setLoader(false)
        }
        PopulateForm()
    }

    async function PopulateForm() {
        checkForAccess()
        //Setting the name of the song
        document.querySelector('input[name=nameOfSong').value = await song.title
        //Setting the name of the artist
        song.sections[2].name ? document.querySelector('input[name=nameOfArtist').value = song.sections[2].name : document.querySelector('input[name=nameOfArtist').value = song.subtitle
        //Setting coverart
        song.images.coverart ? document.querySelector('.song-image').setAttribute('src', song.images.coverart) : document.querySelector('.song-image').setAttribute('src', 'https://us.123rf.com/450wm/roxanabalint/roxanabalint1701/roxanabalint170100138/69079014-not-available-grunge-rubber-stamp-on-white-background-vector-illustration.jpg?ver=6')
        //Setting background of artist
        song.images.background ? document.querySelector('.artist-image').setAttribute('src', song.images.background) : document.querySelector('.artist-image').setAttribute('src', 'https://us.123rf.com/450wm/roxanabalint/roxanabalint1701/roxanabalint170100138/69079014-not-available-grunge-rubber-stamp-on-white-background-vector-illustration.jpg?ver=6')
        song.key ? document.querySelector('.description').setAttribute('key', song.key) : document.querySelector('.description').setAttribute('key', Math.floor(Math.random() * 999999))
        lyrics ? document.querySelector('.text').innerHTML = lyrics.map((line) => {
            return (line + `<br>`)
        }) : document.querySelector('.text').textContent = "NO LYRICS AVAILABLE"

        /* song.subtitle ? */ document.querySelector('input[name=nameOfSubtitle').value = song.subtitle /* : document.querySelector('input[name=nameOfSubtitle').textContent = "Not available" */
        document.querySelector('.name-desc').textContent = song.sections[2].name
        document.querySelector('input[name=released]').value = song.sections[0].metadata[2].text

        song.genres.primary ? document.querySelector('input[name=genres]').textContent = song.genres.primary : document.querySelector('input[name=genres]').value = "Unclassified"
    }
    return (
        <div>
            <Navbar />
            {
                loader ?
                    <Songloader />
                    :
                    <>
                        <div className='flex flex-row m-3 border-none shadow-2xl w-full p-3'>
                            <div className="image w-1/5 h-64 flex items-center justify-center">
                                <div className='shadow-2xl w-4/5 h-4/5 flex overflow-hidden items-center hover:scale-110 rounded-2xl bg-slate-100 justify-center p-1 m-1'>
                                    <img className='rounded-2xl song-image w-11/12 h-11/12 overflow-hidden cursor-pointer m-1' alt="" />
                                </div>
                            </div>
                            <div className="description w-2/4">
                                <form className='w-full'>
                                    <div className="labels flex justify-around w-full items-center">
                                        <label>Name:</label>
                                        <input disabled={true} type="text" readOnly={true} className="name bg-none m-2 w-1/2 p-0.5" value="" name='nameOfSong' />
                                    </div>
                                    <div className="labels flex justify-around w-full items-center">
                                        <label>Artist:</label>
                                        <input disabled={true} type="text" readOnly={true} className="p-0.5 bg-none m-2 w-1/2" value="" name='nameOfArtist' />
                                    </div>
                                    <div className='labels flex justify-around w-full items-center'>
                                        <label>Subtitle:</label>
                                        <input disabled={true} type="text" readOnly={true} className="p-0.5 bg-none  w-1/2 m-2" value="" name='nameOfSubtitle' />
                                    </div>
                                    <div className="labels flex justify-around w-full items-center">
                                        <label>Genres:</label>
                                        <input disabled={true} type="text" readOnly={true} className="p-0.5 bg-none m-2 w-1/2" value="" name='genres' />
                                    </div>
                                    <div className="labels flex justify-around w-full items-center">
                                        <label>Released:</label>
                                        <input disabled={true} type="text" readOnly={true} className="p-0.5 bg-none m-2 w-1/2" value="" name='released' />
                                    </div>
                                </form>
                            </div>
                            <div className="artist w-1/4 flex-col flex items-center justify-center">
                                <img alt="" width={100} className="artist-image rounded-full" />
                                <span className='name-desc'></span>
                            </div>
                        </div>
                        <div className="lyrics">
                            <p className="text-sm">If lyrics aren't visible try refreshing please!!</p>
                            <h2 className='text-xl font-bold'>Lyrics</h2>
                            <div className='text h-100'>
                            </div>
                        </div>
                    </>
            }

        </div>

    )
}

export default Song