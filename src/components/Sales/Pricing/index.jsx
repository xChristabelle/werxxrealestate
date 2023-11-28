import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  Button,
} from "@mui/material";
import { Button as ButtonElement } from "../ButtonElement";
import { Link } from "react-scroll";

const Pricing = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const monthlyData = [
    {
      type: "Monthly",
      title: "Agent",
      details: "Ideal for single agents",
      price: "$19.99",
      agents: "1",
    },
    {
      type: "Monthly",
      title: "Team",
      details: "Most popular",
      price: "$39.99",
      agents: "Up to 25",
    },
    {
      type: "Monthly",
      title: "Broker",
      details: "Ideal for brokers",
      price: "$49.99",
      agents: "Up to 50",
    },
  ];
  const annualData = [
    {
      type: "Annual",
      title: "Agent",
      details: "Ideal for single agents",
      price: "$199",
      agents: "1",
    },
    {
      type: "Annual",
      title: "Team",
      details: "Most popular",
      price: "$399",
      agents: "Up to 25",
    },
    {
      type: "Annual",
      title: "Broker",
      details: "Ideal for brokers",
      price: "$499",
      agents: "Up to 50",
    },
  ];

  const selectedData = value === 0 ? monthlyData : annualData;

  return (
    <Box id="pricing" sx={{ backgroundColor: "#F9F9F9" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "920px",
          flexDirection: "column",
          color: "black",
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ fontWeight: 500 }}>
          Pricing
        </Typography>
        <Typography variant="h4" gutterBottom pt={2} pb={2}>
          No contract or commitment. If the system no longer works for you, then
          cancel at any time.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant={value === 0 ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleChange(null, 0)}
            sx={{ borderRadius: 0, width: 200 }}
          >
            Monthly Billing
          </Button>
          <Button
            variant={value === 1 ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleChange(null, 1)}
            sx={{ borderRadius: 0, width: 200, padding: 1 }}
          >
            Annual Billing
          </Button>
        </Box>
        <Typography variant="h5" gutterBottom pt={4} pb={4}>
          Get two months FREE by paying annually.
        </Typography>
        <TabPanel value={value} index={0}>
          {/* Monthly Prices */}
          <Grid container spacing={2}>
            <PriceCard data={selectedData} tab="month" />
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* Annual Prices */}
          <Grid container spacing={2}>
            <PriceCard data={selectedData} tab="year" />
          </Grid>
        </TabPanel>

        <Typography variant="h6">
          Need more?{" "}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            style={{ color: "#3DF205", cursor: "pointer" }}
          >
            Contact us
          </Link>{" "}
          for pricing.
        </Typography>
      </Container>
    </Box>
  );
};

const PriceCard = ({ data, tab }) => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <Box
          key={index}
          border={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 2,
            padding: "40px!important",
            width: 350,
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 500 }}>
            {item.title}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
            {item.details}
          </Typography>
          <Typography variant="h1" gutterBottom pt={4} sx={{ fontWeight: 500 }}>
            {item.price}
            <Typography variant="h4" gutterBottom pl={1} component="span">
              {tab}
            </Typography>
          </Typography>
          <Divider sx={{ width: "50%", borderColor: "black" }} />
          <Typography variant="h6" gutterBottom pt={3} sx={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 600 }}>{item.agents}</span> agent
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 600 }}>Unlimited</span> properties
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 600 }}>All</span> boards
          </Typography>
          <Box pt={3}>
            <ButtonElement
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={0}
              dark={0}
            >
              Get Started
            </ButtonElement>
          </Box>
        </Box>
      ))}
    </React.Fragment>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default Pricing;
