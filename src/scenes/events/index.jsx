import React from "react";
import { faker } from "@faker-js/faker";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import EventsCard from "@/components/EventsCard";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Events = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const upcomingData = [];
  const pastData = [];

  for (let i = 0; i < 10; i++) {
    const newData = {
      image: faker.image.url(),
      date: faker.date.anytime().toLocaleDateString("en-US"),
      time:
        faker.date
          .anytime()
          .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
        " - " +
        faker.date
          .anytime()
          .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      title: faker.lorem.word(),
      description: faker.lorem.words(50),
      link: faker.image.urlLoremFlickr(),
    };
    upcomingData.push(newData);
  }

  for (let i = 0; i < 100; i++) {
    const newData = {
      image: faker.image.url(),
      date: faker.date.anytime().toLocaleDateString("en-US"),
      time:
        faker.date
          .anytime()
          .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
        " - " +
        faker.date
          .anytime()
          .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      title: faker.lorem.word(),
      description: faker.lorem.words(50),
      link: faker.image.urlLoremFlickr(),
    };
    pastData.push(newData);
  }

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
      <Header
        title="EVENTS"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Yes" {...a11yProps(0)} />
            <Tab label="No" {...a11yProps(1)} />
            <Tab label="Maybe" {...a11yProps(2)} />
            <Tab label="Upcoming" {...a11yProps(3)} />
            <Tab label="Past" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Yes
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          No
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Maybe
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Grid container spacing={2}>
            {upcomingData.map((data, index) => (
              <React.Fragment key={index}>
                <Grid item xs={3}>
                  <EventsCard data={data} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
        <Grid container spacing={2}>
            {pastData.map((data, index) => (
              <React.Fragment key={index}>
                <Grid item xs={3}>
                  <EventsCard data={data} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CustomTabPanel>
      </Box>
    </React.Fragment>
  );
};

export default Events;
