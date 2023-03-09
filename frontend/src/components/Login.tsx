import { useEffect, useState } from 'react'
import GoogleLogin from "react-google-login";
import { gapi } from 'gapi-script'
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import { client } from '../client';
import Header from '../global/Header'
import Footer from '../components/Footer';
import Layout from '../user/admin/scene/layout';

import {
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface Type {
  password: string
  showPassword: boolean
}

const Login = () => {
  const initial = {
    password: "",
    showPassword: false,
  };

  	const [values, setValues] = useState<Type>(initial);

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event:any) => {
      event.preventDefault();
    };

    const handlePasswordChange = (prop:string) => (event:any) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const API = import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: API,
        scope: 'profile'
      })
    };
    gapi.load('client:auth2', start)
  });

  const responseGoogle = (response:any) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId, 
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc)
      .then(() => {
      navigate('/', {replace:true} )
    })
  }
  return (
    <>
      <Header title="Sign Up" to="signup" />
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            typeof="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="bg-white shadow-lg py-7 px-5 md:px-20 mx-4 md:mx-0">
              <div className="my-1 py-5">
                <form className="flex flex-col gap-3">
                  <Grid container spacing={2}>
                    {/* email address */}
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Email Address"
                        label="Email Address"
                        required
                        // variant="outlined"
                        autoComplete="email"
                        fullWidth
                      />
                    </Grid>
                    {/* password */}
                    <Grid item xs={12} sx={{ position: "relative" }}>
                      <TextField
                        placeholder="Password"
                        label="Password"
                        required
                        // variant="outlined"
                        autoComplete="password"
                        fullWidth
                        type="password"
                      />
                    </Grid>
                  </Grid>
                  <Link
                    to="/forget-password"
                    className="text-blue-700 text-sm cursor-pointer"
                  >
                    Forgotten Password?
                  </Link>
                  <Button
                    onClick = {() => navigate('/user')}
                    style={{ padding: "13px", marginTop: "3px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                  <p className="text-center">OR</p>
                  <div>
                    <GoogleLogin  
                      clientId={API}
                      render={(renderProps) => (
                        <button
                          type="button"
                          className="bg-gray-200 flex justify-center items-center p-3 rounded-lg
                          cursor-pointer outline-none w-full"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <FcGoogle className="mr-4" />
                          sign in with google
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy="single_host_origin"
                      scope="profile"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login
