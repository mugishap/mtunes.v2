/* eslint-disable no-unreachable */
import { React, useState, useEffect } from "react";
import swal from "sweetalert";
import Navbar from "../components/Navbar";
import Accountloader from "../Loaders/Accountloader";
import { checkForAccess } from "./check";

function Account() {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [prevPassword, setPrevPassword] = useState({});
  const [username,setUsername] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [country,setCountry] = useState('')
  const [updating,setIsUpdating] = useState(false)

  const append = () => {
    const err = document.createElement("div");
    const msg = document.createTextNode("Feature not yet available");
    err.append(msg);

    document.querySelector(".form").appendChild(err);
    setTimeout(() => {
      err.style.display = "none";
    }, 2000);
  };

  useEffect(() => {
    checkForAccess();
    const data = JSON.parse(localStorage.getItem("mTunesUserProfile"));
    setUser(data);
    setLoader(false);
  }, []);

  const handleUpdateForm = async(e) => {
    e.preventDefault();
    swal("Error", "Feature not yet available", "error", {
      buttons: false,
      timer: 1500,
    });
    return
    // eslint-disable-next-line no-unused-vars
    const api = await fetch('http://localhost:4040/user/updateUser/' + user._id,{
      method:'PUT',
      body:JSON.stringify({
        username:username,
        name:name,
        email:email,
        country:country,
        password:password,
      })
    })
  };
  return (
    <>
      <Navbar />
      {loader ? (
        <Accountloader />
      ) : (
        <div>
          <div className="flex items-center justify-center flex-col">
            <img
              src={user.secureUrl}
              className="w-1/12 h-1/12 rounded-full"
              alt=""
            />

            <div>
              <form onSubmit={handleUpdateForm}>
                <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                  <label className="w-1/3">Name: </label>
                  <input
                    readOnly={true}
                    type="text"
                    value={user.name}
                    className="overflow-hidden w-3/5  rounded p-1"
                  />
                </div>
                <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                  <label className="w-1/3">Username: </label>
                  <input
                    readOnly={true}
                    type="text"
                    value={user.username}
                    className="overflow-hidden w-3/5  rounded p-1"
                  />
                </div>
                <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                  <label className="w-1/3">Email: </label>
                  <input
                    readOnly={true}
                    type="text"
                    value={user.email}
                    className="overflow-hidden w-3/5  rounded p-1"
                  />
                </div>
                <div className="labels flex flex-row items-center justify-between m-3 overflow-hidden">
                  <label className="w-1/3">Country: </label>
                  <input
                    readOnly={true}
                    type="text"
                    value={user.country}
                    className="overflow-hidden w-3/5  rounded p-1"
                  />
                </div>
                <div className="labels flex flex-row items-center justify-center m-3 overflow-hidden">
                  <button
                    className="bg-orange-200 shadow-2xl hover:text-white hover:bg-orange-500 p-1 rounded"
                    onClick={append}
                  >
                    Edit profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
