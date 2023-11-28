import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MarketingCards = ({ data }) => {

  const marketing = data.marketing;
  const user = data.user;
  const userInformation = data.userInformation;
  console.log("🚀 ~ file: MarketingCards.jsx:35 ~ MarketingCards ~ marketing.link:", marketing.link)

  return (
    <React.Fragment>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          sx={{ height: 250 }}
          image={marketing.image}
          title={marketing.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marketing.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {marketing.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={"https://" + marketing.link} target="_blank">View More</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default MarketingCards;
