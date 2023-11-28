import React, { useRef, useState } from "react";

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  useTheme,
  Container,
  Autocomplete,
  FormControl,
  CardMedia,
} from "@mui/material";

import Swal from "sweetalert2";

import { LockOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "@/state";

const states = [
  { abbr: "AE", state: "APO" },
  { abbr: "AL", state: "Alabama" },
  { abbr: "AK", state: "Alaska" },
  { abbr: "AZ", state: "Arizona" },
  { abbr: "AR", state: "Arkansas" },
  { abbr: "CA", state: "California" },
  { abbr: "CO", state: "Colorado" },
  { abbr: "CT", state: "Connecticut" },
  { abbr: "DE", state: "Delaware" },
  { abbr: "DC", state: "District of Columbia" },
  { abbr: "FL", state: "Florida" },
  { abbr: "GA", state: "Georgia" },
  { abbr: "GU", state: "Guam" },
  { abbr: "HI", state: "Hawaii" },
  { abbr: "ID", state: "Idaho" },
  { abbr: "IL", state: "Illinois" },
  { abbr: "IN", state: "Indiana" },
  { abbr: "IA", state: "Iowa" },
  { abbr: "KS", state: "Kansas" },
  { abbr: "KY", state: "Kentucky" },
  { abbr: "LA", state: "Louisiana" },
  { abbr: "ME", state: "Maine" },
  { abbr: "MD", state: "Maryland" },
  { abbr: "MA", state: "Massachusetts" },
  { abbr: "MI", state: "Michigan" },
  { abbr: "MN", state: "Minnesota" },
  { abbr: "MS", state: "Mississippi" },
  { abbr: "MO", state: "Missouri" },
  { abbr: "MT", state: "Montana" },
  { abbr: "NE", state: "Nebraska" },
  { abbr: "NV", state: "Nevada" },
  { abbr: "NH", state: "New Hampshire" },
  { abbr: "NJ", state: "New Jersey" },
  { abbr: "NM", state: "New Mexico" },
  { abbr: "NY", state: "New York" },
  { abbr: "NC", state: "North Carolina" },
  { abbr: "ND", state: "North Dakota" },
  { abbr: "OH", state: "Ohio" },
  { abbr: "OK", state: "Oklahoma" },
  { abbr: "OR", state: "Oregon" },
  { abbr: "PA", state: "Pennsylvania" },
  { abbr: "PR", state: "Puerto Rico" },
  { abbr: "RI", state: "Rhode Island" },
  { abbr: "SC", state: "South Carolina" },
  { abbr: "SD", state: "South Dakota" },
  { abbr: "TN", state: "Tennessee" },
  { abbr: "TX", state: "Texas" },
  { abbr: "UT", state: "Utah" },
  { abbr: "VT", state: "Vermont" },
  { abbr: "VI", state: "Virgin Islands" },
  { abbr: "VA", state: "Virginia" },
  { abbr: "WA", state: "Washington" },
  { abbr: "WV", state: "West Virginia" },
  { abbr: "WI", state: "Wisconsin" },
  { abbr: "WY", state: "Wyoming" },
];

export default function SignUp() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    dre: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    password: "",
    image: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoChange = (e, newValue, name) => {
    setValue({
      ...value,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addUser(value)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "Company was added Successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirm",
          allowOutsideClick: false,
          customClass: {
            container: "swal-index",
          },
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <div
        style={{
          marginTop: theme.spacing(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{
            width: "100%",
            marginTop: theme.spacing(3),
          }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                value={value.firstName}
                onChange={handleChange}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={value.lastName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="companyName"
                id="companyName"
                label="Company Name"
                variant="outlined"
                value={value.companyName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="dre"
                id="dre"
                label="DRE Number"
                variant="outlined"
                value={value.dre}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={value.phoneNumber}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="streetAddress"
                id="streetAddress"
                label="Company Street Address"
                variant="outlined"
                value={value.streetAddress}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="city"
                id="city"
                label="City"
                variant="outlined"
                value={value.city}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Autocomplete
                  disablePortal
                  id="state"
                  options={states || []}
                  sx={{ width: "100%" }}
                  value={value.state || ""}
                  getOptionLabel={(option) => option.state || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(e, newValue) =>
                    handleAutoChange(e, newValue, "state")
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="State" />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="zipCode"
                id="zipCode"
                label="Zip Code"
                variant="outlined"
                value={value.zipCode}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                id="email"
                label="Email Address"
                variant="outlined"
                value={value.email}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={value.password}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button variant="contained" component="label">
                    Upload Company Logo
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setValue({
                          ...value,
                          image: e.target.files[0],
                          imageURL: URL.createObjectURL(e.target.files[0]),
                        });
                      }}
                      hidden
                      ref={fileInputRef}
                    />
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      maxWidth: 64,
                      maxHeight: 64,
                      objectFit: "fill",
                    }}
                    image={value.imageURL}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ margin: theme.spacing(3, 0, 2) }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
