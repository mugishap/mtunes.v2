/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Song.css";
import Navbar from "../components/Navbar";
import Songloader from "./../Loaders/Songloader";
import { checkForAccess } from "./check";

function Song() {
  checkForAccess();
  const params = useParams();

  const [loader, setLoader] = useState(true);
  const [playUrl, setPlayUrl] = useState("");
  const [song, setSong] = useState({});
  const [lyrics, setLyrics] = useState([]);
const [avatar,setAvatar] = useState('')

  const getSong = async () => {
    const string = "song" + params.id;
    const check = localStorage.getItem(string);
    if (check != null) {
      const inLocal = await JSON.parse(check);
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
      console.log(data);
      setSong(data);
      const string = "song" + params.id;
      localStorage.setItem(string, JSON.stringify(data));
      if (data.sections[1].type === "LYRICS") setLyrics(data.sections[1].text);
      if(data.sections[2].type ==='ARTIST') setAvatar(data.sections[2].avatar)
      if(data.sections[3].type ==='ARTIST') setAvatar(data.sections[3].avatar)
      console.log(data.sections[2].avatar)
      setLoader(false);
    }
  };

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
          <div className="flex flex-row m-3 border-none shadow-2xl w-full p-3">
            <div className="image w-1/5 h-64 flex items-center justify-center">
              <div className="shadow-2xl w-4/5 h-4/5 flex overflow-hidden items-center hover:scale-110 rounded-2xl bg-slate-100 justify-center p-1 m-1">
                <img
                  className="rounded-2xl song-image w-11/12 h-11/12 overflow-hidden cursor-pointer m-1"
                  alt=""
                  src={song.images.coverart}
                />
              </div>
            </div>
            <div className="description w-2/4">
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
                  className="artist-image rounded-full"
                />
                <span className="name-desc"></span>
              </div>
            </Link>
          </div>
          <div className="player w-full">
            {playUrl === "" ? (
              <img
                className="rounded-full"
                src={require("./../images/loader.svg")}
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
              lyrics.map((line) => {
                return <div>{line}</div>;
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
