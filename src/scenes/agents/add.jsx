import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "@/state/api";
import Header from "@/components/Header";
import AddAgents from "@/components/AddAgents";

const Agents = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserQuery(userId);

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="ADD AGENTS"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        {!isLoading &&  <AddAgents data={data} /> }
      </Box>
    </React.Fragment>
  );
};

export default Agents;
