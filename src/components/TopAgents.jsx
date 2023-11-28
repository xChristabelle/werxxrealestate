import React from "react";
import DashboardBox from "./DashboardBox";
import { Avatar, Grid, Typography } from "@mui/material";
import MoneyConverter from "./MoneyConverter";
import { faker } from "@faker-js/faker";

const TopAgents = () => {
  return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3].map((data) => (
          <Grid item xs={4} sm={4} md={4} key={data}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={12}>
                <Avatar
                  alt={faker.person.fullName()}
                  src={faker.image.avatar()}
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "2px solid lightgray",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, md: 3 }}>
                  <Grid item xs={12} sm={12} md={12} textAlign="center">
                    <Typography variant="h5" color="rgb(61, 242, 5, 1)">
                      <MoneyConverter
                        amount={faker.number.int({
                          min: 1000000,
                          max: 5000000,
                        })}
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} textAlign="center">
                    <Typography variant="h5">
                      {faker.number.int({
                        min: 10,
                        max: 30,
                      })}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} textAlign="center">
                    <Typography variant="h5">
                      {faker.person.fullName()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
  );
};

export default TopAgents;
