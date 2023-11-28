import React from 'react'
import { Box } from '@mui/system'
import Header from "@/components/Header";
import AddProperties from "@/components/AddProperties";

const Properties = () => {
  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header 
          title="ADD PROPERTIES"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Box sx={{ paddingBottom: "64px" }}>
          <AddProperties />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Properties