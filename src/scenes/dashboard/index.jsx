import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useGetCDAListQuery } from "@/state/api";
import { useSelector } from "react-redux";
import {
  Box,
  CardMedia,
  Grid,
  useTheme,
  Typography,
  useMediaQuery,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import BusinessCard from "@/components/BusinessCard";
import Properties from "@/components/Properties";
import AddProperties from "@/components/AddProperties";
import PaidCap from "@/components/PaidCap";
import ClientMaps from "@/components/ClientMaps";
import DashboardBox from "@/components/DashboardBox";
import ClosedCDA from "@/components/ClosedCDA";
import Commission from "@/components/Commission";
import StatBox from "@/components/StatBox";
import { Close, Email } from "@mui/icons-material";
import { faker } from "@faker-js/faker";

const Dashboard = () => {
  const userId = useSelector((state) => state.global.userId);
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetUserQuery(userId);
  const theme = useTheme();
  const navigate = useNavigate();

  const propertiesData = [];

  for (let i = 0; i < 100; i++) {
    const newData = {
      title: faker.location.streetAddress({ useFullAddress: true }),
      headerName:
        faker.location.state() +
        ", " +
        faker.location.state({ abbreviated: true }),
      status: ["sold", "open"][Math.floor(Math.random() * 2)],
    };
    propertiesData.push(newData);
  }

  const { data: getCDAListQuery } = useGetCDAListQuery();

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

  return (
    <Box m="1.5rem 2.5rem">
      {!isLoading && <BusinessCard data={data || {}} isLoading={isLoading} />}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={8}>
            <Grid container>
              <Grid item xs={6} sm={6} md={6}>
                <DashboardBox title="Sold Properties">
                  <Properties propertiesData={propertiesData} status="sold" />
                </DashboardBox>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <DashboardBox title="Open Properties">
                  <Properties propertiesData={propertiesData} status="open" />
                  <Box display="flex" justifyContent="end">
                    <Button
                      onClick={() => {
                        navigate("/properties/add");
                      }}
                      variant="contained"
                    >
                      Upload
                    </Button>
                  </Box>
                </DashboardBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ height: "100%" }}
            >
              <Grid item xs={12} sm={12} md={12}>
                <DashboardBox title="COMMISSION">
                  <Commission />
                </DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <DashboardBox title="OFFICES"></DashboardBox>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <DashboardBox title="LICENSES"></DashboardBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <DashboardBox title="Paid Cap">
                <PaidCap />
              </DashboardBox>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <DashboardBox title="Client Map">
                <ClientMaps />
              </DashboardBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={8} md={8}>
          <DashboardBox title="CLOSED CDA">
            <ClosedCDA datas={getCDAListQuery} />
          </DashboardBox>
        </Grid>
      </Grid>

      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="MLS BOARD"></DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="TAX FORMS">
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://placehold.co/600x400"
                alt=""
              />
            </DashboardBox>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <DashboardBox title="CONTRACT">
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://placehold.co/600x400"
                alt=""
              />
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
