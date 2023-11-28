import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { useGetUserQuery } from "@/state/api";
import Header from "@/components/Header";
import DashboardBox from "@/components/DashboardBox";
import MarketingCenterController from "@/components/Admin/MarketingCenterController";
import EventsController from "@/components/Admin/EventsController";
import PropertiesController from "@/components/Admin/PropertiesController";
import {
  addTransactionType,
  addPropertyType,
  addPropertyStatus,
  addSource,
} from "@/state";

const Admin = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserQuery(userId);
  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="ADMINISTATION"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DashboardBox title={"Marketing Center"} isSearchAvailable={false}>
              {!isLoading && <MarketingCenterController data={data} />}
            </DashboardBox>
          </Grid>
          <Grid item xs={6}>
            <DashboardBox title={"Events"} isSearchAvailable={false}>
              {!isLoading && <EventsController data={data} />}
            </DashboardBox>
          </Grid>
          <Grid item xs={12}>
            <DashboardBox title={"Properties"} isSearchAvailable={false}>
              <Grid container>
                <Grid item xs={3}>
                  <DashboardBox
                    title={"Transaction Type"}
                    isSearchAvailable={false}
                  >
                    {!isLoading && (
                      <PropertiesController
                        data={data}
                        state={addTransactionType}
                      />
                    )}
                  </DashboardBox>
                </Grid>
                <Grid item xs={3}>
                  <DashboardBox
                    title={"Property Type"}
                    isSearchAvailable={false}
                  >
                    {!isLoading && (
                      <PropertiesController
                        data={data}
                        state={addPropertyType}
                      />
                    )}
                  </DashboardBox>
                </Grid>
                <Grid item xs={3}>
                  <DashboardBox
                    title={"Property Status"}
                    isSearchAvailable={false}
                  >
                    {!isLoading && (
                      <PropertiesController
                        data={data}
                        state={addPropertyStatus}
                      />
                    )}
                  </DashboardBox>
                </Grid>
                <Grid item xs={3}>
                  <DashboardBox title={"Source"} isSearchAvailable={false}>
                    {!isLoading && (
                      <PropertiesController data={data} state={addSource} />
                    )}
                  </DashboardBox>
                </Grid>
              </Grid>
            </DashboardBox>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Admin;
