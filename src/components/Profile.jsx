import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import DashboardBox from "./DashboardBox";

const Profile = ({ data }) => {
  const theme = useTheme();
  const box_border = {
    border: "1px solid",
    borderBottom: 0,
    borderColor: theme.palette.primary[600],
    padding: 1,
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            backgroundColor={theme.palette.background.alt}
            sx={{
              width: "100%",
              padding: 3,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt=""
                src={faker.image.avatar()}
                sx={{
                  width: 152,
                  height: 152,
                }}
              />
            </Box>
            <Typography variant="h4" gutterBottom>
              {data.name}
            </Typography>
            <Box sx={{ padding: ".3rem 0" }}>
              <Typography variant="body1" gutterBottom>
                {data.address}
              </Typography>
            </Box>
            <Box sx={{ padding: ".3rem 0" }}>
              <Typography variant="body1" gutterBottom>
                {data.email}
              </Typography>
            </Box>
            <Box sx={{ padding: ".3rem 0" }}>
              <Typography variant="body1" gutterBottom>
                {data.phoneNumber}
              </Typography>
            </Box>
            <Box sx={{ padding: ".3rem 0" }}>
              <Typography variant="body1" gutterBottom>
                License Number: {data.licenses.number}
              </Typography>
            </Box>
            <Box sx={{ padding: ".3rem 0" }}>
              <Typography variant="body1" gutterBottom>
                Expiration: {data.licenses.expirationDate.toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DashboardBox
                title={"Basic Information"}
                isSearchAvailable={false}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Birthday</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>
                            {data.dateOfBirth.toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Joined Real</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.joinRealEmail}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Title</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.title}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Phone Number</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.phoneNumber}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Address</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.address}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Languages</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.languages}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Bio</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.bio}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Work with</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.work_with}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>State/Province</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.state}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>Service Area Postal Codes</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={box_border}>
                          <Typography>{data.postal}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px solid",
                            borderColor: theme.palette.primary[600],
                            padding: 1,
                          }}
                        >
                          <Typography>Social Media</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px solid",
                            borderColor: theme.palette.primary[600],
                            padding: 1,
                          }}
                        >
                          <Typography>{data.social}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DashboardBox>
            </Grid>
            <Grid item xs={12}>
              <DashboardBox title={"Licenses"} isSearchAvailable={false}>
                <TableContainer component={Paper}>
                  <Table aria-label="license table">
                    <TableHead>
                      <TableRow>
                        <TableCell>License Number</TableCell>
                        <TableCell>Expires</TableCell>
                        <TableCell>Complaints</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{data.licenses.number}</TableCell>
                        <TableCell>
                          {data.licenses.expirationDate.toLocaleDateString()}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Typography>Active</Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </DashboardBox>
            </Grid>
            <Grid item xs={6}>
              <DashboardBox
                title={"Board"}
                isSearchAvailable={false}
              ></DashboardBox>
            </Grid>
            <Grid item xs={6}>
              <DashboardBox
                title={"MLS"}
                isSearchAvailable={false}
              ></DashboardBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
