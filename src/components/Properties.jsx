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
} from "@mui/material";

const Properties = ({ propertiesData, status }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",
              maxHeight: 350,
            }}
            subheader={<li />}
            className="scrollbar"
          >
            {propertiesData.map((data, index) => (
              <React.Fragment key={index}>
                {data.status == status && (
                  <Box>
                    <ListItem alignItems="flex-start">
                      <ListItemIcon>
                        <CardMedia
                          component="img"
                          sx={{ width: 64, paddingRight: 2 }}
                          image="https://placehold.co/600x400"
                          alt=""
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={data.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {data.headerName}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Properties;
