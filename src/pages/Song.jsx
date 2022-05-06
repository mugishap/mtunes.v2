/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, React } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Song.css'
import Navbar from '../components/Navbar'
import Songloader from './../Loaders/Songloader'
import { checkForAccess } from './check'

function Song() {
    const params = useParams()
    let song = []
    let lyrics = []
    const [loader, setLoader] = useState(true)
    const [playUrl, setPlayUrl] = useState('')

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
        let option;
        if (song) {
            if (song.sections[1] && song.sections[2]) {
                option = song.sections[2]
            }
            else if (song.sections[1] || song.sections[2]) {
                option = song.sections[2]
            }
        }
        const playSong = async (identification) => {
            const string = '/url/' + identification
            const check = localStorage.getItem(string)
            // if (string != null) {
            //     const url = localStorage.getItem(string)
            //     setUrl(url)
            //     console.log(url)
            // }
            // else {

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com',
                    'X-RapidAPI-Key': '4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22'
                }
            };
            const api = await fetch(`https://youtube-video-download-info.p.rapidapi.com/dl?id=${identification}`, options)
            const data = await api.json()
            //console.log(data.link[17][0])
            const name = '/url/' + identification;
            setPlayUrl(data.link[251][0])
            localStorage.setItem(name, playUrl)
            // }
        }
        if (option) {
            const link = JSON.stringify(option.youtubeurl.image.url)
            const id = link.match(/(vi\/)(\w+)(\/)/g)[0].slice(3, -1)
            //console.log(id)

            playSong(id)
        }
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
                        <div className="player w-full">
                            {/* <audio controls crossOrigin autoPlay>
                                <source src='https://one.123berlin.xyz/dl.php?url=J01SJXPeIzh9nVgCcO8KWfza%2BEDarMUGBvhFV3EbydwRspx6venYFjTHWxk%2BB%2BZ1fG6qlhHVa6d33Rr6qwQxcP2aQgEKrUjJNibeQRUXR7bqsiifp%2FwcYeeVpeFzejtaTi4DFwxsxrsAWtNMsd5qmdoeJ7LNv9fuv%2F4cq5pRxmbFmmLXgi9WbZEivTYTbiK0NiiTP9cxDi2YYbvTzwBb8OzD9E5GL0m8nt%2BXAkZ77Bhg1bdX9Y%2B%2BgLUkBx4HmG1UdXeFL7K0A%2Bk9wVq5x4deo8%2FjZBMtfd0EVIgzHpAp5u2NdfNvdLH55jJkx34us272SXHXc2shYqRE2Oblao8vN3fe3ftBuZwxHWn%2BccDDSMhnSWKcNgJxmx7ipyWND86gaqNLOY1K7mMqXtWLUihBRQVPgEunp4JoLooZkXLHokBo4NkaPO7hruTKuTILz9CoAQ8H6nHC1lEeU%2BdLnjKnBra%2F6jvpuxjoDHPwJqyw0b9%2FqJdj1Klf3%2FprCcLjyIHx7wZn6XJ%2BVisybYNTr7xl0FnPsC0JQA9R9%2BEcLBhTku%2Fw%2FjA4FaIw1F8k%2FItpALilYyTw51RM%2F%2BmE6JtceH47xNC%2BzT75QMB0yYRU8Cho9Aab0BVizQL55rVzshMXjDIVJPn3d22iLIQjoglBsZe%2Fj3fjBAa6FbRuqpcVg9ZaF2ZgaM2Ie%2FqfNYrSqeIy3SxDij%2FvCGYCqEPmIak2RVZlNwNi%2BD339XR6aZY2ZKEGDsPCUPdc%2BVliZX%2B5U7aDqFdMsNcdvWI%2Fp0yqsh2vMSZtTDVDIT71qisrJ2bKj9ImFGGx1hdm6QQFRkrq0Wd0yvVmL%2Fhbk%2BKEWjzmPbKCDUizwJoTDL0WSktyBe%2FBuSvpVUBJixuiljcu4OcCMEDbyT%2FSezb0qDsX5t2CvOuEAlS5sbrkzBd1Ruh3tJ%2BVVu61Huq%2FGYS4z%2FMu2%2BnFzvsyfjGnsx1b5TriQqalcMlx9bzt%2BddDRxaj3Ywo2X7pKaX4cSGt233DwVzn%2B%2BhqI2p6iXib%2F%2BFZoNUTYfDHrUqxiZqY3T3FZ0d9Z4hy80xwi6XjU3NdHsNwAP5DlX9KUUBAGqp6tTu2ubZ3rVWW9LBVYb3dKpfZOAfPRLsgfsCIPPqe6wSotGptGZfibSZWA%2FbgTPmjMpTrRPRaDW5nQmfNWqPjgeU8ihpTr7ZF45M%3D&i=251' />
                            </audio> */}
                            <a target='_blank' href={playUrl} rel="noreferrer">
                                <button className='p-2 rounded bg-orange-500 w-24 m-1 text-white text-lg'>Play</button>
                            </a>
                            {/* <iframe width="560" height="315" src={playUrl} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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