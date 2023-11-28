import React from "react";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMarketingCenterListQuery } from "@/state/api";
import { faker } from "@faker-js/faker";
import MarketingCards from "@/components/MarketingCards";
import Header from "@/components/Header";

const MarketingCenter = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetMarketingCenterListQuery(userId);

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="MARKETING CENTER"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Grid container spacing={2}>
          {!isLoading &&
            data.map((data, index) => {
              console.log(
                "🚀 ~ file: index.jsx:41 ~ MarketingCenter ~ data:",
                data
              );
              return (
                <React.Fragment key={index}>
                  <Grid item xs={3}>
                    <MarketingCards data={data} />
                  </Grid>
                </React.Fragment>
              );
            })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default MarketingCenter;
