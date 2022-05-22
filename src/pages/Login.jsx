import { Button, TextField } from "@mui/material";
import { React, useState } from "react";
import Signup from "./Signup";


function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChangeForm = (e) => {
    setLogin(false);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const api = await fetch("https://mtunesv2.herokuapp.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await api.json();
    console.log(data);
    if (data.message === "Allowed to continue") {
      window.location.replace("/home");
      localStorage.setItem("mTunesToken", data.token);
      localStorage.setItem("mTunesUserProfile", data.user);
    } else {
      window.alert("Either password or email is wrong try again please");
      setLoader(false);
    }
  };
  return (
    <>
      {login ? (

        <div className="h-[90vh] w-screen flex justify-center items-center">
          <div className="w-1/3 h-2/3  shadow-2xl shadow-black ">
            <form className="w-full h-full flex flex-col items-center justify-center">
              <TextField
                required
                id="outlined-basic"
                label="Email"
                variant="standard"
                onChange={(e)=>{setEmail(e.target.value)}}

                className="w-10/12 mb-32"
              />
              <TextField
              onChange={(e)=>{setPassword(e.target.value)}}
                required
                id="outlined-basic"
                label="Password"
                variant="standard"
                className="w-10/12"
                type='password'
              />
                      <Button variant="contained" size="large" >Submit</Button>

            </form>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
}

export default Login;
