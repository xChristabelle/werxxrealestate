import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Container,
} from "@mui/material";
import { faker } from "@faker-js/faker";

const generateFakeReview = () => ({
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    company: faker.company.name(),
  },
  title: faker.lorem.word(),
  content: faker.lorem.paragraph(),
});

const Reviews = () => {
  const reviews = [];

  for (let i = 0; i < 3; i++) {
    reviews.push(generateFakeReview());
  }

  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", height: "860px" }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography
              color="white"
              gutterBottom
              variant="h2"
              sx={{ width: "50%", fontWeight: 600 }}
            >
              Some kind words from a few of our happy Hubze customers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {reviews.map((review, index) => (
                <Grid item xs={4} key={index} sx={{ position: "relative" }}>
                  <Card sx={{ height: 360, backgroundColor: "white" }}>
                    <Avatar
                      alt={review.author.name}
                      src={review.author.avatar}
                      sx={{
                        width: 80,
                        height: 80,
                        position: "absolute",
                        top: -10,
                        left: "50%",
                        transform: "translateX(-30%)",
                        zIndex: 1,
                      }}
                    />
                    <CardContent
                      sx={{
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h3"
                        color="black"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#3DF205" }}
                      >
                        {review.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        color="black"
                        marginTop={2}
                        marginBottom={4}
                      >
                        {review.content}
                      </Typography>
                      <Typography variant="body1" color="black">
                        {review.author.name}
                        <br />
                        {review.author.company}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Reviews;
