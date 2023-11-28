import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

const BrokerTeam = ({ data }) => {
  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <ListItem disableGutters>
              <ListItemIcon>
                <Avatar alt={data.name} src={data.image} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{ display: "inline", padding: "0 .5rem" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {data.name}
                      </Typography>
                      <Box sx={{ padding: "0 .1rem" }}>
                        <EmailOutlined />
                      </Box>
                      <Box sx={{ padding: "0 .1rem" }}>
                        <PhoneOutlined />
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <Typography>{data.team}</Typography>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default BrokerTeam;
