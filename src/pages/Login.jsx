import { Button, TextField } from "@mui/material";
import { React, useState } from "react";
import Signup from "./Signup";
import swal from "sweetalert";

function Login() {
  const [login, setLogin] = useState(true);
  const [viewPassword, setViewPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChangeForm = (e) => {
    setLogin(false);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const api = await fetch("http://localhost:4040/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    const data = await api.json();
    console.log(data);
    if (data.message === "Allowed to continue") {
      localStorage.setItem("mTunesToken", data.token);
      localStorage.setItem("mTunesUserProfile", JSON.stringify(data.user));
      window.location.replace("/home");
    } else {
      swal(
        "Bad credentials!",
        "Either password or email is wrong try again please",
        "error",
        {
          buttons: false,
          timer: 1500,
        }
      );
      setLoader(false);
    }
  };
  return (
    <>
      {login ? (
        <div className="h-[90vh] w-screen flex justify-center items-center">
          <div className="w-3/12 h-1/3  shadow-2xl rounded-xl shadow-black ">
            <form
              className="w-full h-full flex flex-col items-center justify-center"
              onSubmit={handleFormSubmit}
            >
              <TextField
                required
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                sx={{ marginBottom: '10px' }}
                className="w-10/12 mb-32"
              />
              <TextField
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                required
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="w-10/12"
                type="password"
              />
              {loader ? (
                <p>Loading...</p>
              ) : (
                <button
                type="submit"
                onClick={handleFormSubmit}
                className="cursor-pointer submit-btn shadow-2xl w-32 m-2 p-2 rounded font-semibold text-white bg-orange-500"
              >Login</button>
              )}
              <p className="whitespace-nowrap">
                New to mTunes?{" "}
                <span className="whitespace-nowrap hover:text-orange-500 cursor-pointer font-bold" onClick={handleChangeForm}>
                  Signup
                </span>
              </p>
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
