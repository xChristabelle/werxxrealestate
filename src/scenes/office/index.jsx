import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { faker } from "@faker-js/faker";
import DashboardBox from "@/components/DashboardBox";
import BrokerTeam from "@/components/BrokerTeam";
import Broker from "@/components/Broker";
import Header from "@/components/Header";

const Office = () => {
  const theme = useTheme();
  const brokerTeam = [];

  for (let i = 0; i < 4; i++) {
    const newData = {
      image: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      contact: faker.phone.number(),
      team: faker.commerce.department(),
    };
    brokerTeam.push(newData);
  }

  const designatedBroker = {
    image: faker.image.avatar(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
  };
  const managingBroker = {
    image: faker.image.avatar(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
  };

  const box_border = {
    border: "1px solid",
    borderBottom: 0,
    borderColor: theme.palette.primary[600],
    padding: 1,
  };

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="OFFICE"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
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
                CA
              </Typography>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  EIN
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.number.int({ min: 10000, max: 99999 })}
                </Typography>
              </Box>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  Mailing and Commission Document Address
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.location.streetAddress({ useFullAddress: true })}
                </Typography>
              </Box>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  State Office Address
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.location.streetAddress({ useFullAddress: true })}
                </Typography>
              </Box>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  Branch Office Address
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.location.streetAddress({ useFullAddress: true })}
                </Typography>
              </Box>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  Phone and Fax Numbers
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.phone.number()}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.phone.number()}
                </Typography>
              </Box>
              <Box sx={{ padding: ".3rem 0" }}>
                <Typography variant="body1" gutterBottom>
                  Support Email
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {faker.internet.email()}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DashboardBox
                  title="Transaction Type"
                  isSearchAvailable={false}
                >
                  <Typography>SPLIT CHECK</Typography>
                </DashboardBox>
              </Grid>
              <Grid item xs={4}>
                <DashboardBox
                  title="Brokerage License ID"
                  isSearchAvailable={false}
                >
                  {faker.number.int()}
                </DashboardBox>
              </Grid>
              <Grid item xs={4}>
                <DashboardBox title="Payment System" isSearchAvailable={false}>
                  {faker.number.int()}
                </DashboardBox>
              </Grid>
              <Grid item xs={6}>
                <DashboardBox title="Broker Team" isSearchAvailable={false}>
                  <BrokerTeam data={brokerTeam} />
                </DashboardBox>
              </Grid>
              <Grid item xs={6}>
                <DashboardBox
                  title="Designated Broker"
                  isSearchAvailable={false}
                >
                  <Broker data={designatedBroker} />
                </DashboardBox>
              </Grid>
              <Grid item xs={6}>
                <DashboardBox title="Manager" isSearchAvailable={false}>
                  <Broker data={managingBroker} />
                </DashboardBox>
              </Grid>
              <Grid item xs={12}>
                <DashboardBox
                  title="Banking Information"
                  isSearchAvailable={false}
                >
                  <Grid container>
                    <Grid item xs={6}>
                      <Box sx={box_border}>
                        <Typography>Bank Name</Typography>
                        <Typography>{faker.company.name()}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={box_border}>
                        <Typography>Account Number</Typography>
                        <Typography>{faker.finance.accountNumber()}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={box_border}>
                        <Typography>Routing Number (For ACH)</Typography>
                        <Typography>
                          {faker.number.int({ min: 1000, max: 9999 })}
                        </Typography>
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
                        <Typography>Routing Number (For Wires)</Typography>
                        <Typography>
                          {faker.number.int({ min: 1000, max: 9999 })}
                        </Typography>
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
                        <Typography>Payable To</Typography>
                        <Typography>{faker.person.fullName()}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </DashboardBox>
              </Grid>
              <Grid item xs={12}>
                <DashboardBox title="Company Details" isSearchAvailable={false}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box sx={box_border}>
                        <Typography>Name</Typography>
                        <Typography>{faker.company.name()}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={box_border}>
                        <Typography>EIN</Typography>
                        {faker.number.int({ min: 10000, max: 99999 })}
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
                        <Typography>Address</Typography>
                        <Typography>
                          {faker.location.streetAddress({
                            useFullAddress: true,
                          })}
                        </Typography>
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
                        <Typography>State/Province</Typography>
                        <Typography>{faker.location.state()}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </DashboardBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Office;
