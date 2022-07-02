import React, {} from "react"
import { Link } from "react-router-dom";
import CustomerSlider from "../components/CustomerSlider";


function Landing() {

    window.onscroll = function () {
        var scroll = window.pageYOffset;
        if (scroll > 10) {
            const styles = ["bg-gray-900", 'border-2', 'border-white']
            styles.forEach(style => {
                document.querySelector(".navbar").classList.add(style);
            }
            )
        }
        else{
            const styles = ["bg-gray-900", 'border-2', 'border-white']
            styles.forEach(style => {
                document.querySelector(".navbar").classList.remove(style);
            }
            )
        }
    }

    return (
        <div className="home w-screen bg-gray-800 text-white">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>

            <div style={{ 'position': 'fixed' }} className="navbar z-10 box-border mb-8 w-11/12 flex m-3 p-3 rounded-lg outline-white">
                <div className="font-bold text-2xl flex items-center w-1/5 justify-center ">
                    <img className="w-12 h-12" src={require("./../images/logo1.png")} alt="" />
                    mTunes
                </div>
                <div className="flex text-lg items-center w-2/5 justify-center ">
                    <ul className="flex items-center justify-center">
                        <li className="p-3 hover:text-purple-600 cursor-pointer font-[500] whitespace-nowrap">Key Benefits</li>
                        <li className="p-3 hover:text-purple-600 cursor-pointer font-[500]">Testimonials</li>
                        <li className="p-3 hover:text-purple-600 cursor-pointer font-[500]">Features</li>
                        <li className="p-3 hover:text-purple-600 cursor-pointer font-[500]">Pricing</li>
                    </ul>
                </div>
                <div className="flex items-center w-1/5 justify-center ">
                    <a className="font-bold w-full h-full" href="/signup"><button className=" p-3 hover:bg-orange-500 hover:scale-105 rounded-xl outline white text-white bg-black">SIGN UP</button></a>
                    <a className="font-bold w-full h-full" href="/login"><button className=" p-3 hover:bg-orange-500 hover:scale-105 rounded-xl outline white text-white bg-black">LOG IN</button></a>
                </div>
            </div>
            <div className="main relative top-48 w-full mt- flex flex-col items-center  h-fit">
                <div className="w-full flex flex-row  items-center justify-between">
                    <div className="h-fit flex w-1/2  items-center justify-center">
                        <span className="text-xs tablet:text-6xl desktop:text-8xl w-full mb-4  font-bold"><p className="listening inline w-fit">Listening</p> is<br></br>
                            Everything</span>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <img className="hover:rotate-3 rounded-md" src={require("./../images/hero.png")} alt="" />
                    </  div>
                </div>
                <div className="benefits w-full">
                    <h1 className="mb-4 text-5xl font-bold whitespace-nowrap">Our<p className="listening inline"> Classic Benefits</p><br></br>
                        for your music</h1>
                </div>
                <div className="flex items-center  justify-around w-11/12">
                    <div className="hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4">
                        <div className="flex items-start justify-center rounded-full w-[55px] mb-8 h-[55px] bg-gray-800"><i className="bi-emoji-smile" style={{ "fontSize": "2rem", "color": "orange" }}></i></div>
                        <h1 className="text-white font-bold text-2xl mb-4">Reduces stress
                        </h1>
                        <span className="text-xl text-white">
                            Research has found that listening to music can relieve stress by triggering biochemical stress reducers.</span>
                    </div>
                    <div className="hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4">

                        <h1 className="text-white font-bold text-2xl mb-4">Heart healthy
                        </h1>
                        <span className="text-xl text-white">
                            Music can boost the brain&apos;s production of the hormone dopamine.</span>

                    </div>
                    <div className="hover:scale-105 hover:-translate-y-4 shadow-black shadow-md w-1/3 m-4 h-[30vh] bg-gray-700 rounded-xl bordered flex flex-col items-center justify-center p-4">
                        <div className="flex items-start justify-center rounded-full w-[55px] mb-8 h-[55px] bg-gray-800"><i className="bi-emoji-sunglasses" style={{ "fontSize": "2rem", "color": "#a213e5" }}></i></div>
                        <h1 className="text-white font-bold text-2xl mb-4">Elevates mood</h1>
                        <span className="text-xl text-white">
                            It can reduce heart rate, lower blood pressure, and increase serotonin levels in the blood.
                        </span>
                    </div>
                </div>
                <div className="customers mt-16 ">
                    <h1 className="w-full mb-4 text-4xl font-bold">What <p className="inline listening">Customers </p>
                        say about us</h1>
                    <CustomerSlider />
                </div>
                <div className="mt-16 flex items-center justify-center w-full">
                    <div className="w-1/2 flex items-center justify-center">
                        <img className="hover:-rotate-3" src={require("./../images/app-features.png")} alt="" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Classic <p className="inline listening">Features </p><br></br>
                            Great Experience</h1>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Discover Music</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Discover Music</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">mTunes Concert</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Friend Activity</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Sharing Music</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Daily Mixes</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Create Playlists</p>
                            </div>
                            <div className="flex items-center justify-start m-3 w-1/2">
                                <i className="bi-arrow-right-circle hover:scale-110" style={{ "fontSize": "2rem", "color": "orange" }}></i>
                                <p className="ml-4 text-lg font-semibold mt-2 mb-0 whitespace-nowrap">Private Sessions</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to="/" className="p-3 rounded text-white m-3 bg-purple-600"><i className="bi-apple"></i><button className=" font-semibold text-lg">Download App</button></Link>
                            <Link to="/" className="hover:text-white text-purple-600 p-3 transition duration-50 ease-out hover:ease-in  font-semibold text-lg rounded  hover:bg-purple-600 m-3 bg-none border-2 border-purple-600"><i className="bi-headsets"></i><button >Download App</button></Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-fit justify-around items-center">
                    <div className="flex items-center justify-center w-1/2">
                        <h1 className="text-5xl font-bold">mTunes Has Great<br></br>
                            <p className="inline listening"> Customers  </p></h1>
                    </div>
                    <div className="mt-16 w-1/3 grid items-center  grid-cols-2">
                        <img className=" m-4 hover:brightness-75" src={require("./../images/partner-1.png")} alt="" />
                        <img className=" m-4 hover:brightness-75" src={require("./../images/partner-2.png")} alt="" />
                        <img className=" m-4 hover:brightness-75" src={require("./../images/partner-3.png")} alt="" />
                        <img className=" m-4 hover:brightness-75" src={require("./../images/partner-4.png")} alt="" />
                    </div>
                </div>
                <div className="flex items-center flex-col justify-center w-full mt-16">
                    <h1 className="text-5xl font-bold">Our <p className="listening inline"> Pricing Plans </p> are<br></br>
                        Amazing</h1>
                    <div className="flex items-center w-2/3">
                        <div className="flex flex-col relative w-1/3 items-center mt-8  justify-center p-4  bg-gray-800 text-white border-2 bg-opacity-70 border-white rounded-xl m-4">
                            <span className="text-6xl my-4 font-bold">$12/<p className="text-xs inline">Month</p></span>
                            <div className="absolute -top-4 p-1 w-24 rounded-lg font-semibold text-black bg-yellow-600">Basic</div>
                            <ul className="m-0 p-0 mb-4 w-2/3 flex items-center justify-start flex-col">
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Discover music</li>
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Create Playlist</li>
                                <li className="text-gray-600 flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Share Music</li>
                                <li className="text-gray-600 flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Private Sessions</li>
                            </ul>
                            <button className="absolute -bottom-4 p-1 w-32 h-12 hover:bg-yellow-700 hover:scale-105 rounded-lg font-semibold text-black bg-yellow-600">Purchase Plan</button>

                        </div>
                        <div className="flex flex-col relative w-1/3 items-center mt-8  justify-center p-4 bg-gray-800 text-white border-2 bg-opacity-70 border-white rounded-xl m-4">
                            <span className="text-6xl my-4 font-bold">$24/<p className="text-xs inline">Month</p></span>
                            <div className="absolute -top-4 p-1 w-24 rounded-lg font-semibold text-black bg-pink-600">Standard</div>
                            <ul className="m-0 p-0 mb-4 w-2/3 flex items-center justify-start flex-col">
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Discover music</li>
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Create Playlist</li>
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Share Music</li>
                                <li className="text-gray-600 flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Private Sessions</li>
                            </ul>
                            <button className="absolute -bottom-4 p-1 w-32 h-12 hover:bg-pink-700 hover:scale-105  rounded-lg font-semibold text-black bg-pink-600">Purchase Plan</button>

                        </div>
                        <div className="flex flex-col relative w-1/3 items-center mt-8  justify-center p-4 bg-gray-800 text-white border-2 bg-opacity-70 border-white rounded-xl m-4">
                            <div className="absolute -top-4 p-1 w-24 rounded-lg font-semibold text-black bg-purple-600">Premium</div>
                            <span className="text-6xl my-4 font-bold">$36/<p className="text-xs inline">Month</p></span>

                            <ul className="m-0 p-0 mb-4 w-2/3 flex items-center justify-start flex-col">
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Discover music</li>
                                <li className="flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Create Playlist</li>
                                <li className=" flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Share Music</li>
                                <li className=" flex items-center justify-start w-full text-xl mt-4 whitespace-nowrap"><i className="mr-1 bi-music-note"></i>Private Sessions</li>
                            </ul>
                            <button className="absolute -bottom-4 p-1 w-32 h-12 hover:bg-purple-700 hover:scale-105 rounded-lg font-semibold text-black bg-purple-600">Purchase Plan</button>

                        </div>
                    </div>
                </div>
                <div className="footer text-white flex items-center justify-center p-1 md:p-4 mt-8 bg-gray-800 w-full">
                    <div className="about flex w-2/12 flex-col items-start justify-center">
                        <h1 className="text-3xl my-4 font-bold">About</h1>
                        <p>The music industry consists of the individuals and organizations that earn money by listen music.</p>
                        <div className="flex items-start justify-center p-2">
                            <i className="bi-map" style={{ 'fontSize': '1rem', 'color': 'orange' }}></i>
                            <p className="ml-3">0782307144 Kigali, Rwanda<br></br>
                                <p>KK105St</p></p>
                        </div>
                        <p>&copy;2022 | Precieux.Inc | All rights reserved</p>
                    </div>
                    <div className="flex items-center justify-center w-2/12">
                        <ul className="flex flex-col items-start  justify-center w-full">
                            <li className="text-lg font-semibold">Features</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Discover</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Features</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Playlist</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Collection</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Library</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-2/12">
                        <ul className="flex flex-col items-start  justify-center w-full">
                            <li className="text-lg font-semibold">Benefits</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Mind peacer</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Playlist</li>
                            <li className="text-lg text-gray-500 cursor-pointer">3d Play</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Classics</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Modern</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-2/12">
                        <ul className="flex flex-col items-start  justify-center w-full">
                            <li className="text-lg font-semibold">Support</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Great support</li>
                            <li className="text-lg text-gray-500 cursor-pointer">24/7 support</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Products</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Contact</li>
                            <li className="text-lg text-gray-500 cursor-pointer">Help</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center w-2/12">
                        <h1 className="text-3xl my-4 font-bold">Newsletter!</h1>
                        <p>Subscribe our newsletter to get free updates daily
                        </p>
                        <div className="block xl:flex bg-yellow-200 items-center justify-between w-full rounded-lg">
                            <input type="email" className="bg-yellow-200 w-full  placeholder:text-black p-3 placeholder:text-lg rounded-xl newsletter-input text-black" placeholder="mail@gmail.com" name="email"></input>
                            <button className="subscribe text-white w-2/5  p-1 h-12 bg-black text-lg font-semibold rounded-lg m-1">Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className="bg-gray-800 w-full py-4 m-0 text-white">&copy;mTunes by Precieux. All rights reserved 2022</p>
            </div>
        </div>
    )
}

export default Landing
