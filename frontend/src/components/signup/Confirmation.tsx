import React from "react";
import { Props } from './PersonalDetails';
import { Container } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import Layout from '../../user/admin/scene/layout';

import {
  Grid,
  ListItem,
  List,
  ListItemText,
  Button
} from "@mui/material";

const Confirmation = ({ prevStep, values }: Props) => {
  const navigate = useNavigate();
  const { firstName, lastName, email, username, country } =
    values;
  const Continue = (e:any) => {
    e.preventDefault();
    navigate('/user')
  };

  const Previous = (e:any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="lg">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country of Residence" secondary={country} />
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
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
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Confirmation;
