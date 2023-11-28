import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useGetPropertiesListQuery } from "@/state/api";
import Header from "@/components/Header";

const Properties = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetPropertiesListQuery();
  const [clickedRow, setClickedRow] = useState();
  console.log("🚀 ~ file: index.jsx:13 ~ Properties ~ data:", data);

  const columns = [
    {
      field: "mlsNumber",
      headerName: "MLS",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.property.mlsNumber}
            </Typography>
          </>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      flex: 3,
      renderCell: (params) => {
        const address =
          params.row.property.street +
          ", " +
          params.row.property.city +
          ", " +
          params.row.property.state
          ", " +
          params.row.property.postalCode;
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {address}
            </Typography>
          </>
        );
      },
    },
    {
      field: "salesPrice",
      headerName: "Sales Price",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.property.salesPrice}
            </Typography>
          </>
        );
      },
    },
    {
      field: "escrow",
      headerName: "Escrow",
      flex: 2,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.property.escrowCompany}
            </Typography>
          </>
        );
      },
    },
    {
      field: "contractStartDate",
      headerName: "Contract Date",
      flex: 1,
      renderCell: (params) => {
        const date = new Date(params.row.property.contractStartDate)
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {date.toLocaleDateString()}
            </Typography>
          </>
        );
      },
    },
    {
      field: "closingDate",
      headerName: "Closing Date",
      flex: 1,
      renderCell: (params) => {
        const date = new Date(params.row.property.closingDate)
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {date.toLocaleDateString()}
            </Typography>
          </>
        );
      },
    },
    {
      field: "agent",
      headerName: "Agent",
      flex: 1,
      renderCell: (params) => {
        const agent = params.row.userInformation.firstName + " " +  params.row.userInformation.lastName
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {agent}
            </Typography>
          </>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              <Visibility />
            </IconButton>
            <IconButton
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              <Edit />
            </IconButton>
            <IconButton
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              <Delete />
            </IconButton>
          </>
        );
      },
    },
  ];
  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("🚀 ~ file: ClosedCDA.jsx:68 ~ onButtonClick ~ row:", row);
    setClickedRow(row);
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Properties"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ paddingLeft: "0!important", marginLeft: "0!important" }}
      >
        <Box
          mt={2}
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
            loading={isLoading || !data}
            getRowId={(row) => row.property._id}
            rows={data || []}
            columns={columns}
            sx={{ width: "100%" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Properties;
