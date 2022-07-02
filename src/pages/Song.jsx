/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Song.css";
import Navbar from "../components/Navbar";
import Songloader from "./../Loaders/Songloader";
import { checkForAccess } from "./check";

function Song() {
  // checkForAccess();
  const params = useParams();

  const [loader, setLoader] = useState(true);
  const [playUrl, setPlayUrl] = useState("");
  const [song, setSong] = useState({});
  const [lyrics, setLyrics] = useState([]);
  const [avatar, setAvatar] = useState('https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8=')


  const getSong = async () => {
    const string = "song" + params.id;
    const check = localStorage.getItem(string);
    if (check != null) {

      const inLocal = await JSON.parse(check);
      console.log(inLocal)
      if (inLocal.sections.length > 0) {
        for (let i = 0; i < inLocal.sections.length; i++) {
          if (inLocal.sections[i].type === "VIDEO") {
            getVideoStream(inLocal.sections[i].youtubeurl.actions[0].uri);
          }

          if (inLocal.sections[i].type === "LYRICS") {
            setLyrics(inLocal.sections[i].text);
          }
          if (inLocal.sections[i].type === 'ARTIST') {
            setAvatar(inLocal.sections[2].avatar)
          }
        };
      }

      setSong(inLocal);
      setLoader(false);
    } else {
      const api = await fetch(
        `https://shazam.p.rapidapi.com/songs/get-details?key=${params.id}&locale=en-US`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "shazam.p.rapidapi.com",
            "X-RapidAPI-Key":
              "a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc",
          },
        }
      );
      const data = await api.json();
      setSong(data);
      const string = "song" + params.id;
      localStorage.setItem(string, JSON.stringify(data));
      console.log(data.sections)

      if (data.sections.length > 0) {
        for (let i = 0; i < data.sections.length; i++) {
          if (data.sections[i].type === "VIDEO") {
            getVideoStream(data.sections[i].youtubeurl.actions[0].uri);
          }

          if (data.sections[i].type === "LYRICS") {
            setLyrics(data.sections[i].text);
          }
          if (data.sections[i].type === 'ARTIST') {
            setAvatar(data.sections[2].avatar)
          }
        };
      }

      setLoader(false);
    }
  };

  //GetID function
  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

  //Video stream function

  const getVideoStream = async (url) => {
    console.log(url);
    const playId = youtube_parser(url);
    //Video streams
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc',
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    };

    const api = await fetch('https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=' + playId + '&geo=DE', options)
    const data = await api.json()
    console.log(data);
    console.log(data.link[250][0])
    setPlayUrl(data.link[250][0]);
  }

  useEffect(() => {
    getSong();
  }, []);
  return (
    <div>
      <Navbar />
      {loader ? (
        <Songloader />
      ) : (
        <>
          <div className="flex flex-row justify-between items-center m-3 border-none shadow-2xl w-full p-3">
            <div className="image w-1/5 h-64 flex items-center justify-center">
              <div className="shadow-2xl w-4/5 md:h-4/5 sm:h-3/5 h-2/5 flex overflow-hidden items-center hover:scale-110 rounded-2xl bg-slate-100 justify-center p-1 m-1">
                <img
                  className="rounded-2xl song-image md:w-11/12 md:h-11/12 w-full overflow-hidden cursor-pointer m-1"
                  alt=""
                  src={song.images.coverart}
                />
              </div>
            </div>
            <div className="description w-2/5">
              <form className="w-full">
                <div className="labels flex justify-around w-full items-center">
                  <label>Name:</label>
                  <input
                    disabled={true}
                    type="text"
                    readOnly={true}
                    className="name bg-none m-2 w-1/2 p-0.5"
                    value={song.title}
                    name="nameOfSong"
                  />
                </div>
                <div className="labels flex justify-around w-full items-center">
                  <label>Artist:</label>
                  <input
                    disabled={true}
                    type="text"
                    readOnly={true}
                    className="p-0.5 bg-none m-2 w-1/2"
                    value={song.subtitle}
                    name="nameOfArtist"
                  />
                </div>
                <div className="labels flex justify-around w-full items-center">
                  <label>Subtitle:</label>
                  <input
                    disabled={true}
                    type="text"
                    readOnly={true}
                    className="p-0.5 bg-none  w-1/2 m-2"
                    value={song.subtitle}
                    name="nameOfSubtitle"
                  />
                </div>
                <div className="labels flex justify-around w-full items-center">
                  <label>Genres:</label>
                  <input
                    disabled={true}
                    type="text"
                    readOnly={true}
                    className="p-0.5 bg-none m-2 w-1/2"
                    value={song.genres.primary}
                    name="genres"
                  />
                </div>
                <div className="labels flex justify-around w-full items-center">
                  <label>Released:</label>
                  <input
                    disabled={true}
                    type="text"
                    readOnly={true}
                    className="p-0.5 bg-none m-2 w-1/2"
                    value={song.sections[0].metadata[2].text}
                    name="released"
                  />
                </div>
              </form>
            </div>
            <Link className="w-1/3 h-full" to={`/artist/details/${song.subtitle}`}>
              <div className="artist w-full flex-col flex items-center justify-center">
                <img
                  alt=""
                  src={avatar}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-cover artist-image rounded-[100%]"
                />
                <span className="name-desc"></span>
              </div>
            </Link>
          </div>
          <div className="player w-full text-center flex items-center justify-center">
            {playUrl === "" ? (
              <img
                className="rounded-full w-[70px] h-[70px] object-cover"
                src={require("./../images/roller.gif")}
                alt=""
              />
            ) : (
              <a target="_blank" href={playUrl} rel="noreferrer">
                <button className="p-2 rounded bg-orange-500 w-24 m-1 text-white text-lg">
                  Play
                </button>
              </a>
            )}
          </div>
          <div className="lyrics">
            <h2 className="text-xl font-bold">Lyrics</h2>
            {lyrics ? (
              lyrics.map((line, index) => {
                return <div key={index}>{line}</div>;
              })
            ) : (
              <p className="text-sm">Lyrics not available!!</p>
            )}
            <div className="text h-100"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Song;
