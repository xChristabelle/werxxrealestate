import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { addFeedback } from "@/state";
import { useGetNewsfeedQuery, useGetUserQuery } from "@/state/api";
import Header from "@/components/Header";
import Comments from "@/components/Comments/Comments";

const Newsfeed = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetNewsfeedQuery(userId);
  const { data: userInformation } = useGetUserQuery(userId);
  
  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="NEWSFEED"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Box sx={{ paddingBottom: "64px" }}>
            <Comments
              user={userInformation}
              currentUserId={userId}
              data={data}
              addFeedback={addFeedback}
            />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Newsfeed;
