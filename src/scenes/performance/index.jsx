import React, { useState } from "react";
import { useGetUserListQuery } from "@/state/api";
import {
  Box,
  Grid,
  useTheme,
  Button,
  Typography,
  Avatar,
  Link,
  Container,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import DashboardBox from "@/components/DashboardBox";
import MoneyConverter from "@/components/MoneyConverter";
import TopAgents from "@/components/TopAgents";
import AgentRanking from "@/components/AgentRanking";
import StatusBarChart from "@/components/StatusBarChart";
import Header from "@/components/Header";

const Performance = () => {
  const theme = useTheme();

  const { data, isLoading } = useGetUserListQuery();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      renderCell: (params) => {
        const counter =
          params.api.getRowIndexRelativeToVisibleRows(params.row._id) + 1;
        return <>{counter}</>;
      },
    },
    {
      field: "agent",
      headerName: "Agent",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link href="#" rel="noopener noreferrer" underline="none">
              <Typography sx={{ color: theme.palette.secondary[50] }}>
                {params.row.firstName + " " + params.row.lastName}
              </Typography>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "closed",
      headerName: "Closed",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {faker.number.int({
                min: 10,
                max: 30,
              })}
            </Typography>
          </>
        );
      },
    },
    {
      field: "volume",
      headerName: "Volume",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              <MoneyConverter
                amount={faker.number.int({
                  min: 1000000,
                  max: 5000000,
                })}
              />
            </Typography>
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="PERFORMANCE"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Top Agents" isSearchAvailable={false}>
                  <TopAgents />
                </DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Months">
                  <StatusBarChart />
                </DashboardBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <DashboardBox title="Agent Ranking">
              <Container
                component="main"
                maxWidth="lg"
                sx={{ paddingLeft: "0!important", marginLeft: "0!important" }}
              >
                <AgentRanking
                  data={data}
                  isLoading={isLoading}
                  columns={columns}
                  style={{ width: "auto" }}
                />
              </Container>
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Performance;
