import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../../assets/share.mp4";
import Header from "../../global/Header";

import { Grid, TextField, Button, Box } from "@mui/material";

const ForgetPassword = () => {
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
                <form className="flex flex-col gap-6">
                  <div className="text-center w-max-lg flex flex-col gap-5">
                    <h3 className="text-black text-5xl font-medium">
                      Reset your password
                    </h3>
                    <p className="text-sm w-sm">
                      Please provide the email address you used when you signed
                      up for your Loom account.
                    </p>
                  </div>
                  <Grid container spacing={2}>
                    {/* email address */}
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Email Address"
                        label="Email Address"
                        // variant="outlined"
                        autoComplete="password"
                        fullWidth
                      />
                      <Button
                        style={{ padding: "13px", marginTop: "30px", fontWeight:'bold' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        Send Email
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
