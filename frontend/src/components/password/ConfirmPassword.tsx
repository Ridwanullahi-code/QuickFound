import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../../assets/share.mp4";
import Header from "../../global/Header";

import { Grid, TextField, Button, Box } from "@mui/material";

const ConfirmPassword = () => {
  
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
                    {/* password */}
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Enter 5 digits pin"
                        label="text"
                        // variant="outlined"
                        autoComplete="text"
                        fullWidth
                        type="text"
                        maxRows={5}
                      />
                    </Grid>
                  </Grid>
                  <p className="text-blue-700 text-sm cursor-pointer">
                    Forgotten Password?
                  </p>
                  <Button
                    style={{ padding: "13px", marginTop: "3px" }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmPassword;
