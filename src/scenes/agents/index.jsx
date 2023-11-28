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
import { useGetAgentsListQuery } from "@/state/api";
import Header from "@/components/Header";

const Agents = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetAgentsListQuery();
  const [clickedRow, setClickedRow] = useState();
  console.log("🚀 ~ file: index.jsx:13 ~ Agents ~ data:", data);

  const columns = [
    {
      field: "agent",
      headerName: "Agent Name",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.userInformation.firstName +
                " " +
                params.row.userInformation.middleName +
                " " +
                params.row.userInformation.lastName}
            </Typography>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.userInformation.email}
            </Typography>
          </>
        );
      },
    },
    {
      field: "dre",
      headerName: "DRE",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.userInformation.dre}
            </Typography>
          </>
        );
      },
    },
    {
      field: "isActive",
      headerName: "isActive",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={{ color: theme.palette.secondary[50] }}>
              {params.row.user.isActive ? "Active" : "Inactive"}
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
        title="AGENTS"
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
            getRowId={(row) => row.user._id}
            rows={data || []}
            columns={columns}
            sx={{ width: "100%" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Agents;
