import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Link,
  useTheme,
  Grid,
  Paper,
  ListItemIcon,
} from "@mui/material";
import {
  Check,
  Call,
  ContactMailOutlined,
  Email,
  LocationOnOutlined,
  ContentCopy,
  Launch,
} from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
import FlexBetween from "@/components/FlexBetween";
import logo from "@/assets/logo.png";

const BusinessCard = ({ data, isLoading }) => {
  console.log("🚀 ~ file: BusinessCard.jsx:30 ~ BusinessCard ~ data:", data);
  const theme = useTheme();
  const user = data.user;
  const userInformation = data.userInformation;

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <React.Fragment>
      <FlexBetween backgroundColor={theme.palette.background.alt}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: 2 }}
        >
          <Grid item xs={7}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              height="100%"
            >
              <Grid item xs={12} display="flex" alignItems="center">
                <Grid container rowSpacing={1} columnSpacing={{ md: 3 }}>
                  <Grid item xs={3}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ md: 3 }}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <Avatar
                          alt=""
                          src="https://placehold.co/600x400"
                          sx={{
                            width: 152,
                            height: 152,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <LinkRouter to="/">
                          <Button
                            variant="contained"
                            sx={{
                              m: 1,
                              borderRadius: "50px",
                              textTransform: "none",
                            }}
                          >
                            Producing
                          </Button>
                        </LinkRouter>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={9}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h3"
                          sx={{ color: theme.palette.grey[10] }}
                        >
                          {capitalizeWords(
                            userInformation.firstName +
                              " " +
                              userInformation.middleName +
                              " " +
                              userInformation.lastName
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component="span"
                          fontWeight="500"
                          variant="body1"
                          sx={{ color: theme.palette.grey[10] }}
                        >
                          License: {userInformation.licenses.number} {bull}{" "}
                          Expires {userInformation.licenses.expirationDate}
                        </Typography>
                        <Box component="div">
                          <Link
                            href={userInformation.sponsorLink}
                            fontWeight="500"
                            variant="body1"
                            sx={{ color: theme.palette.grey[10] }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ContentCopy
                              sx={{
                                color: theme.palette.neutral[600],
                                fontSize: "12px",
                              }}
                            />
                            Copy Sponsor Link
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component="div"
                          fontWeight="500"
                          variant="body1"
                          sx={{ color: theme.palette.grey[10] }}
                        >
                          JoinReal Email: {userInformation.email} |{" "}
                          <Link
                            href={userInformation.website}
                            fontWeight="500"
                            variant="body1"
                            sx={{ color: theme.palette.grey[10] }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Launch
                              sx={{
                                color: theme.palette.neutral[600],
                                fontSize: "12px",
                              }}
                            />
                            Agent Website
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component="div"
                          fontWeight="500"
                          variant="body1"
                          sx={{ color: theme.palette.grey[10] }}
                        >
                          ⓢ Stock Purchase Plan Opted In:
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Check />}
                            sx={{
                              textTransform: "none",
                              borderRadius: "50px",
                              marginRight: "5px",
                              "& > *:first-of-type": {
                                marginRight: "5px",
                              },
                            }}
                          >
                            Yes
                          </Button>{" "}
                          Shareworks ID: #{userInformation.shareworksId}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    item
                    xs={3}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={logo}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <FlexBetween sx={{ display: "flex" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  fontWeight="500"
                  variant="body1"
                  sx={{ color: theme.palette.grey[10] }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ p: 1, border: "1px solid grey", mb: 1 }}>
                  <Box sx={{ padding: "4px", display: "flex" }}>
                    <Call sx={{ color: theme.palette.neutral[600] }} />
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      pl="0.3rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      ({userInformation.countryCode}){" "}
                      {userInformation.phoneNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "4px", display: "flex" }}>
                    <ContactMailOutlined
                      sx={{ color: theme.palette.neutral[600] }}
                    />
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      pl="0.3rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      {userInformation.email}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "4px", display: "flex" }}>
                    <Email sx={{ color: theme.palette.neutral[600] }} />
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      pl="0.3rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      {userInformation.email}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "4px", display: "flex" }}>
                    <LocationOnOutlined
                      sx={{ color: theme.palette.neutral[600] }}
                    />
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      pl="0.3rem"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      {userInformation.address.street},{" "}
                      {userInformation.address.city},{" "}
                      {userInformation.address.state}{" "}
                      {userInformation.address.zipCode}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  component="div"
                  fontWeight="500"
                  variant="body1"
                  sx={{ color: theme.palette.grey[10] }}
                >
                  Transactions
                  <Link
                    component="button"
                    variant="body2"
                    sx={{ textAlign: "start", ml: 1 }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    See all
                  </Link>
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    border: "1px solid grey",
                    display: "flex",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Active
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Closed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Terminated
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  component="div"
                  fontWeight="500"
                  variant="body1"
                  sx={{ color: theme.palette.grey[10] }}
                >
                  Listings
                  <Link
                    component="button"
                    variant="body2"
                    sx={{ textAlign: "start", ml: 1 }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    See all
                  </Link>
                </Typography>
                <Box sx={{ p: 1, border: "1px solid grey", display: "flex" }}>
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Active
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Closed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "4px",
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: 8,
                    }}
                  >
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body1"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      0
                    </Typography>
                    <Typography
                      component="div"
                      fontWeight="500"
                      variant="body2"
                      sx={{ color: theme.palette.grey[10] }}
                    >
                      Terminated
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </FlexBetween>
          </Grid>
        </Grid>
      </FlexBetween>
    </React.Fragment>
  );
};

export default BusinessCard;
