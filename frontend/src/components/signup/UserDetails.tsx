import React from 'react'
import { Container } from "@mui/system";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import { Props } from './PersonalDetails'

const UserDetails = ({nextStep, handleChange, values}:Props) => {

    const Continue = (e:any) => {
        e.preventDefault()
        nextStep();
    }

   return (
     <Container component="main" maxWidth="xs">
       <div>
         <Box>
           <Typography component="h1" variant="h5">
             Sign up
           </Typography>
           <Typography component="p" variant="subtitle1"
             sx={{ marginBottom: "7px" }}>
            Please fill in the form to create an account!
           </Typography>
         </Box>
         <form>
           <Grid container spacing={2}>
             {/* email address */}
             <Grid item xs={12}>
               <TextField
                 placeholder="Email Address"
                 label="Email Address"
                 onChange={handleChange}
                 defaultValue={values.email}
                 required
                 // variant="outlined"
                 autoComplete="email"
                 fullWidth
               />
             </Grid>
             <br />
             {/* username */}
             <Grid item xs={12}>
               <TextField
                 placeholder="Username"
                 label="Username"
                 onChange={handleChange}
                 defaultValue={values.username}
                 // variant="outlined"
                 required
                 autoComplete="username"
                 fullWidth
               />
             </Grid>
             <br />
             {/* password */}
             <Grid item xs={12}>
               <TextField
                 placeholder="Password"
                 label="Password"
                 onChange={handleChange}
                 defaultValue={values.password}
                 // variant="outlined"
                 required
                 autoComplete="password"
                 fullWidth
                 type="password"
               />
             </Grid>
           </Grid>
           <Button
             onClick={Continue}
             style={{padding:'15px', marginTop:'16px', marginBottom:'6px'}}
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
           >
             Next
           </Button>
         </form>
       </div>
     </Container>
   );
}

export default UserDetails
