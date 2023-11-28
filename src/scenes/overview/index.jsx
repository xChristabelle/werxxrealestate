import React from "react";
import { useGetUserQuery, useGetCDAListQuery } from "@/state/api";
import { useSelector } from "react-redux";
import {
  Box,
  CardMedia,
  Grid,
  useTheme,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";

import { Email } from "@mui/icons-material";
import { useGetUserListQuery } from "@/state/api";
import { faker } from "@faker-js/faker";

import DashboardBox from "@/components/DashboardBox";
import StatBox from "@/components/StatBox";
import MoneyConverter from "@/components/MoneyConverter";
import TopAgents from "@/components/TopAgents";
import AgentRanking from "@/components/AgentRanking";
import StatusBarChart from "@/components/StatusBarChart";
import PropertiesList from "@/components/PropertiesList";

const Overview = () => {
  const userId = useSelector((state) => state.global.userId);
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetUserQuery(userId);
  const theme = useTheme();

  const propertiesData = [];

  for (let i = 0; i < 100; i++) {
    const newData = {
      _id: faker.number.int(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      sales: "$" + faker.number.int({ min: 10000, max: 99999 }),
      closing: faker.date.anytime().toLocaleDateString(),
      agent: faker.person.fullName(),
      status: ["active", "closed"][Math.floor(Math.random() * 2)],
    };
    propertiesData.push(newData);
  }

  const { data: getCDAListQuery } = useGetCDAListQuery();
  const { data: getUserListData, isLoading } = useGetUserListQuery();

  const listing = {
    labels: ["active", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const expiring = {
    labels: ["expiring", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pending = {
    labels: ["pending", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const closing = {
    labels: ["closing", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const units = {
    labels: ["units", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const volume = {
    labels: ["volume", "Until goal reached"],
    datasets: [
      {
        data: [
          faker.number.int({
            min: 0,
            max: 100,
          }),
          faker.number.int({
            min: 0,
            max: 100,
          }),
        ],
        backgroundColor: ["rgb(61, 242, 5, 0.6)", "rgb(89, 89, 89, 0.6)"],
        borderColor: ["rgb(61, 242, 5, 1)", "rgb(89, 89, 89, 1)"],
        borderWidth: 1,
      },
    ],
  };

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
      flex: 2,
      renderCell: (params) => {
        const name =
          params.row.firstName +
          " " +
          params.row.middleName +
          " " +
          params.row.lastName;
        return (
          <>
            <Link href="#" rel="noopener noreferrer" underline="none">
              <Typography
                sx={{ color: theme.palette.secondary[50] }}
              >{faker.person.fullName()}</Typography>
            </Link>
          </>
        );
      },
    },
    {
      field: "closed",
      headerName: "Closed",
      width: 70,
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
    <Box m="1.5rem 2.5rem">
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="8px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
      >
        <StatBox
          title="Listing"
          value={listing}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="Expiring"
          value={expiring}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="Pending"
          value={pending}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="MO Closing"
          value={closing}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="YTD Units"
          value={units}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="YTD Volume"
          value={volume}
          increase="+14%"
          description="Since last month"
          hideDescription={true}
          size="sm"
          chartSize={40}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={8} md={8}>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Top Agents" isSearchAvailable={false}>
                  <TopAgents />
                </DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Months" isSearchAvailable={false}>
                  <StatusBarChart />
                </DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Active Listing" isSearchAvailable={false}>
                  <PropertiesList data={propertiesData} status="active" />
                </DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <DashboardBox title="Pending" isSearchAvailable={false}>
                  <PropertiesList data={propertiesData} status="closed" />
                </DashboardBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <DashboardBox title="Agent Ranking">
              <AgentRanking
                data={getUserListData}
                isLoading={isLoading}
                columns={columns}
              />
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
