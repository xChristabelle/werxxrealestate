import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import NewTransaction from "@/components/Transaction/NewTransaction";

const Add = () => {

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <NewTransaction />
      </Box>
    </React.Fragment>
  );
};

export default Add;
