import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CalendarMonthOutlined,
  EmailOutlined,
  Inbox,
  LocationOnOutlined,
  Mail,
  ScheduleOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const EventsCards = ({ data }) => {
  const theme = useTheme();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box sx={{ width: 650 }} role="presentation">
      <CardMedia
        sx={{ height: 450, objectFit: "cover" }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <FlexBetween m="4px 0 18px 0">
          <Button variant="contained">Real Academy</Button>
          <Box>
            <EmailOutlined
              sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
            />
            <Typography variant="body1" component="div">
              RSVP to Add to Calendar
            </Typography>
          </Box>
        </FlexBetween>
        <Grid container spacing={2} sx={{ paddingBottom: 2 }}>
          <Grid item xs={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthOutlined
                sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
              />
              <Typography variant="h5" component="div">
                {data.date}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex" }}>
              <ScheduleOutlined
                sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
              />
              <Typography variant="h5" component="div">
                {data.time}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex" }}>
              <LocationOnOutlined
                sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
              />
              <Typography variant="h5" component="div">
                Online
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography gutterBottom variant="h2" component="div">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            <Link
              href={data.link}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.link}
            </Link>
          </Typography>
          <Box mt={3}>
            <Typography variant="h6" color="text.secondary">
              Description
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data.description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          bottom: 0,
          width: 650,
          height: 75,
          background: theme.palette.neutral[600],
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4" color="text.secondary" ml={2}>
              Going?
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="contained">Yes</Button>
              <Button variant="contained">No</Button>
              <Button variant="contained">Maybe</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardMedia sx={{ height: 200 }} image={data.image} title={data.title} />
        <CardContent>
          <Grid container spacing={2} sx={{ paddingBottom: 2 }}>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CalendarMonthOutlined
                  sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
                />
                <Typography variant="body2" component="div">
                  {data.date}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ display: "flex" }}>
                <ScheduleOutlined
                  sx={{ color: theme.palette.neutral[600], marginRight: 1 }}
                />
                <Typography variant="body2" component="div">
                  {data.time}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggleDrawer("right", true)}>
            View More
          </Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default EventsCards;
