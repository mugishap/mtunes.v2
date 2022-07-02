/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Login from "./Login";
import swal from "sweetalert";
import countries from "./../utils/data";
import { checkForAccess } from "./check.js";
import { TextField } from "@mui/material";

function Signup() {

  const handleChangeForm = (e) => {
    setSignup(false);
  };

  const [signup, setSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    country: "",
    password: "",
    image: "",
  })
  const [profile, setProfile] = useState(false);
  const [loader, setLoader] = useState(false);

  function previewFile() {
    const preview = document.querySelector(".profile-pic");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        //console.log(reader.result);
        setFormData({ ...formData, image: reader.result });
        setProfile(true);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const logUserIn = async (data) => {
    const api = await fetch("http://localhost:4040/login", {
      method: "POST",
      //credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const res = await api.json();
    //console.log(res);
    if (res.message === "Allowed to continue") {
      checkForAccess();
    } else {
      swal("Error", "Error in creating your account", {
        buttons: false,
        timer: 1500,
      });
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.username === "" ||
      formData.country === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      swal("Error", "All required fields must be filled", "error", {
        buttons: false,
        timer: 1500,
      });
      return;
    }

    setLoader(true);

    if (formData.image === "") {
      setFormData({
        ...formData,
        image: "https://i.pravatar.cc/300"
      });
    }
    const api = await fetch("http://localhost:4040/user/newAccount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData
      }),
    });
    const data = await api.json();
    if (data.message === "Account created") {
      console.log(data.user, data.email);
      logUserIn(data.user);
    } else {
      swal(
        "Error",
        "A user with that email or username already exists. Try changing it",
        "error",
        {
          buttons: false,
          timer: 1500,
        }
      );
      setLoader(false);
    }
  };
  setTimeout(() => {
    if (loader === true) {
      setLoader(false);
    }
  }, 10000);
  return (
    <>
      {signup ? (
        <div className=" form h-screen w-full flex flex-col items-center">
          <div className="m-auto w-3/12 flex flex-col shadow-2xl p-4 items-center">
            <div className="inNav ml-2 mb-3 logo w-full flex flex-col items-center justify-center">
              <img
                src={require("./../images/logo1.png")}
                className="w-15"
                alt=""
              />
              <div className="font-bold text-lg overflow-hidden">
                Sign up to mTunes
              </div>
            </div>
            <form className="portrait:block overflow-hidden text-m mt-4 p-2 w-full h-4/5 items-center justify-center flex flex-col">
              <div className="name-div flex m-1 flex-row items-center justify-center w-full">
                <TextField
                  required={true}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }
                  }
                  type="text"
                  className=" w-11/12"
                  label="Full Name"
                  variant="outlined"
                />
              </div>
              <div className="username-div flex flex-col items-center justify-center w-full m-1">
                <TextField
                  label="Username"
                  variant="outlined"
                  required

                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  type="text"
                  className="w-11/12"                />
              </div>
              <div className="email-div flex flex-row items-center justify-center w-full m-1">
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  type="email"
                  className="w-11/12"                />
              </div>
              <div className=" country-div flex flex-row items-center justify-center w-full m-1">
                <select
                  required
                  id="country"
                  name="country"
                  className="flex items-center justify-center w-11/12 p-2 rounded-md  "
                  onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                  }}
                >
                  <option value="">Select country</option>
                  {
                    countries.map((country, index) => {
                      return (<option key={index} value={country}>{country}</option>)
                    })
                  }

                </select>
              </div>
              <div className="password-div flex flex-row justify-center w-full m-1">
                <TextField
                  label="Password"
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  type="password"
                  className="w-11/12"
                />
              </div>
              <div className="flex flex-col h-36 items-center justify-center w-full">
                <div className="w-full h-full flex flex-row items-center justify-center">
                  <label
                    htmlFor="image"
                    className=" overflow-hidden bg-orange-500 rounded text-white p-1 m-2 flex items-center justify-center"
                  >
                    Upload Profile picture
                  </label>
                  <input
                    required
                    id="image"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={previewFile}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="overflow-hidden h-36">
                  {profile ? (
                    <></>
                  ) : (
                    <p className="text-xs h-full overflow-hidden">
                      NB: If no file chosen then the image below will be your
                      profile pic
                    </p>
                  )}
                </div>
                <img
                  src="https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280.png"
                  className="object-center object-cover profile-pic w-16 h-72 relative rounded-full overflow-hidden m-1"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center w-full justify-center m-1">
                {loader ? (
                  <>
                    <p className="text-sm">
                      Please wait while you request is being processed
                    </p>
                    <img
                      className="h-12 rounded-full"
                      src={require("./../images/loader.gif")}
                      alt=""
                    />
                  </>
                ) : (
                  <button
                    type="submit"
                    onClick={handleFormSubmit}
                    className="cursor-pointer submit-btn shadow-2xl w-32 p-2 rounded font-semibold text-white bg-orange-500"
                  >Register</button>
                )}
              </div>
            </form>
            <div className="overflow-hidden flex flex-row items-center justify-center ">
              <p className="overflow-hidden">Already have an account?</p>&nbsp;
              <p
                onClick={handleChangeForm}
                className="hover:text-orange-500 font-bold cursor-pointer"
              >
                Login
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Signup;
