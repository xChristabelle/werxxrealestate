import React from "react";
import {
  Box,
  ListItem,
  ListItemText,
  CardMedia,
  ListItemIcon,
  Typography,
  List,
  Divider,
  Grid,
  Container,
  useTheme,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const PropertiesList = ({ data, status }) => {
  const theme = useTheme();
  const filteredData = data.filter((item) => item.status === status);

  const columns = [
    {
      field: "address",
      headerName: "Addresss",
      flex: 2,
      cellClassName: "wrap-cell",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.address}
            </Typography>
          </>
        );
      },
    },
    {
      field: "sales",
      headerName: "Sales",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.sales}
            </Typography>
          </>
        );
      },
    },
    {
      field: "closing",
      headerName: "Closing",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.closing}
            </Typography>
          </>
        );
      },
    },
    {
      field: "agent",
      headerName: "Agent",
      flex: 1,
      cellClassName: "wrap-cell",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.agent}
            </Typography>
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Container
        component="main"
        sx={{ padding: "0!important", margin: "0!important" }}
      >
        <Box
          mt={2}
          height={"45vh"}
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
          }}
        >
          <DataGrid
            // loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={filteredData || []}
            columns={columns}
            sx={{ width: "100%" }}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default PropertiesList;
