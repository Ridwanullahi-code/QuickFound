import React from 'react'
import { Container } from "@mui/system";
import { Typography, Grid, TextField, Button } from "@mui/material";

export interface Props{
  prevStep?: any
  nextStep?: any
  handleChange?: any
  values?:any

}

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }: Props) => {
  
  const Continue = (e: any) => {
    let numbers = Object.values(values);
    e.preventDefault();
    numbers.forEach((num) => {
      if (num == '') {
        prevStep();
      } else {
        nextStep();
      }
    })
  };

  const Previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ marginBottom: "7px" }}
        >
          Please fill in the form to create an account!
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="First Name"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                required
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                required
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
              <TextField
                placeholder="Country of Residence"
                label="Phone Number"
                onChange={handleChange("country")}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
                required
              />
            </Grid>

            {/* level of education */}
            <Grid item xs={12}>
              <TextField
                placeholder="Level of Education"
                label="Country of Residence"
                onChange={handleChange("levelOfEducation")}
                defaultValue={values.levelOfEducation}
                autoComplete="Level of Education"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                style={{ padding: "15px" }}
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                style={{ padding: "15px", marginBottom: "6px" }}
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default PersonalDetails
