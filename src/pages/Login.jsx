import { Button, IconButton, InputAdornment, InputLabel, FormControl, OutlinedInput, TextField } from "@mui/material";
import { React, useState } from "react";
import Signup from "./Signup";
import swal from "sweetalert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


function Login() {
  const [login, setLogin] = useState(true);
  const [viewPassword, setViewPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [values, setValues] = useState({
    showPassword: false
  });

  const handlePasswordChangeView = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeForm = (e) => {
    setLogin(false);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //Validation
    if (formData.email === "") {
      swal("Error", "Please enter your email", "error", { buttons: false, timer: 2000 });
      return
    }
    else if (formData.password === "") {
      swal("Error", "Please enter your password", "error", { buttons: false, timer: 2000 });
      return
    }
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
      swal("Error", data.message, "error", {
        buttons: false,
        timer: 1500,
      });
      setLoader(false);
    }
  };
  return (
    <>
      {login ? (
        <div className="h-[90vh] w-screen flex justify-center items-center">
          <div className="w-3/12 py-4 h-2/5  shadow-2xl rounded-xl shadow-black ">
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
                className="w-10/12 mb-32 email"
              />
              <FormControl className="w-10/12 mb-12">
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handlePasswordChangeView}
                  className="w-full password"
                  required={true}
                  aria-label="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {loader ? (
                <img className="w-[40px] m-[20px]" src={require('./../images/roller.gif')} alt="" />
              ) : (
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="cursor-pointer submit-btn shadow-2xl w-32 m-[20px] p-2 rounded font-semibold text-white bg-orange-500"
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
