import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Tab, Tabs, Button } from "@mui/material";
import { faker } from "@faker-js/faker";
import TransactionTable from "@/components/Transaction/TransactionTable";
import Header from "@/components/Header";

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Transaction = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const active = [];

  for (let i = 0; i < 4; i++) {
    const newData = {
      propertyAddress: faker.string.alphanumeric({
        length: { min: 5, max: 10 },
        casing: "upper",
      }),
      transactionType: "Sale",
      category: faker.location.streetAddress({ useFullAddress: true }),
      client: faker.commerce.price({ symbol: "$" }),
      agent: faker.lorem.word(),
      tc: faker.lorem.word(),
      createdDate: faker.date.anytime().toLocaleDateString("en-US"),
      acceptanceDate: faker.date.anytime().toLocaleDateString("en-US"),
      submittedDate: faker.date.anytime().toLocaleDateString("en-US"),
      closingDate: faker.date.anytime().toLocaleDateString("en-US"),
      closedDate: faker.date.anytime().toLocaleDateString("en-US"),
      phase: faker.lorem.word(),
    };
    active.push(newData);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="Transaction"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Active" {...a11yProps(1)} />
            <Tab label="Pending" {...a11yProps(2)} />
            <Tab label="Submitted for Closing" {...a11yProps(3)} />
            <Tab label="Closing" {...a11yProps(4)} />
            <Tab label="Closed" {...a11yProps(5)} />
            <Tab label="Cancelled" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TransactionTable data={active} tab="all" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TransactionTable data={active} tab="active" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TransactionTable data={active} tab="pending" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <TransactionTable data={active} tab="submitted" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <TransactionTable data={active} tab="closing" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <TransactionTable data={active} tab="closed" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <TransactionTable data={active} tab="cancelled" />
        </CustomTabPanel>
        <Button
          onClick={() => {
            navigate("/transaction/add");
          }}
          variant="contained"
        >
          Create Transaction
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Transaction;
