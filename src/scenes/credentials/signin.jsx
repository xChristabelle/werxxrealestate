import React from "react";
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
  useTheme,
  Typography,
  CardMedia,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import logo from "@/assets/logo.png";
import video from "@/assets/house.mp4";

const SignIn = () => {
  const theme = useTheme();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardMedia
          component="video"
          image={video}
          autoPlay
          muted
          loop
          sx={{
            height: "100%",
            objectFit: "fill",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div
          style={{
            margin: theme.spacing(0, 16),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151, marginBottom: theme.spacing(2) }}
            image={logo}
            alt=""
          />
          <form
            style={{
              width: "100%",
              marginTop: theme.spacing(1),
            }}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              href="/dashboard"
              sx={{ margin: theme.spacing(3, 0, 2) }}
            >
                Sign In 
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
