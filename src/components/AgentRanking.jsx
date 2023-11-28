import React, { useState } from "react";
import DashboardBox from "./DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";

const AgentRanking = ({ data, isLoading, columns }) => {
  const theme = useTheme();
  const [clickedRow, setClickedRow] = useState();

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("🚀 ~ file: ClosedCDA.jsx:68 ~ onButtonClick ~ row:", row);
    setClickedRow(row);
  };

  return (
    <Box
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.background.alt,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
        height: "75vh",
        marginTop: "40px",
        width: "100%"
      }}
    >
      <DataGrid
        loading={isLoading || !data}
        getRowId={(row) => row._id}
        rows={data || []}
        columns={columns}
      />
      clickedRow: {clickedRow ? `${clickedRow._id}` : null}
    </Box>
  );
};

export default AgentRanking;
