import React, { useState } from "react";
import { Close, EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import Profile from "./Profile";

const DesignatedBroker = ({ data }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const profile = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    licenses: {
      number: faker.finance.accountNumber(),
      expirationDate: faker.date.future() 
    },
    dateOfBirth: faker.date.birthdate(),
    joinRealEmail: faker.internet.email(),
    title: faker.person.jobTitle(),
    phoneNumber: faker.phone.number(),
    address: faker.location.streetAddress(),
    languages: faker.lorem.word(),
    bio: faker.person.bio(),
    work_with: faker.lorem.word(),
    state: faker.location.state({ abbreviated: true }),
    postal: faker.location.zipCode(),
    social: faker.lorem.word(),
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar
            alt={data.name}
            src={data.image}
            sx={{
              width: 64,
              height: 64,
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>{data.name}</Typography>
            </Grid>
            <Grid item xs={12} display={"flex"}>
              <PhoneOutlined sx={{ marginRight: ".4rem" }} />
              <Typography>{data.contact}</Typography>
            </Grid>
            <Grid item xs={12} display={"flex"}>
              <EmailOutlined sx={{ marginRight: ".4rem" }} />
              <Typography>{data.email}</Typography>
            </Grid>
            <Grid item xs={12} display={"flex"}>
              <Typography>
                <Button onClick={handleOpen}>See Profile</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="end"
              color={theme.palette.alt}
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Profile data={profile} />
      </Dialog>
    </React.Fragment>
  );
};

export default DesignatedBroker;
