import React, { useState } from "react";
import { useGetUserQuery } from "@/state/api";
import { useSelector } from "react-redux";
import { Box, CardMedia, Grid } from "@mui/material";
import BusinessCard from "@/components/BusinessCard";
import ContactInformation from "@/components/ContactInformation";
import AuthPage from "@/components/AuthPage";
import ChatsPage from "@/components/ChatsPage";

const Inbox = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }

  // return (
  //   <Box m="1.5rem 2.5rem">
  //     <BusinessCard user={data || {}} />

  //     <Grid
  //       container
  //       spacing={{ xs: 2, md: 3 }}
  //       columns={{ xs: 4, sm: 8, md: 12 }}
  //     >
  //       {/* <Grid item xs={2} sm={6} md={6}>
  //         <ContactInformation />
  //       </Grid> */}
  //       {/* <Grid item xs={2} sm={6} md={6}>
  //         <Grid
  //           container
  //           spacing={{ xs: 2, md: 3 }}
  //           columns={{ xs: 4, sm: 8, md: 12 }}
  //         >
  //           <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //           <Grid item xs={2} sm={6} md={6}>
  //             <Box
  //               sx={{
  //                 border: "1px solid grey",
  //                 borderRadius: "50px",
  //                 width: "100%",
  //                 height: "200px",
  //               }}
  //             ></Box>
  //           </Grid>
  //         </Grid>
  //       </Grid> */}
  //       <Grid item xs={12} sm={12} md={12}>

  //       </Grid>
  //     </Grid>
  //   </Box>
  // );
};

export default Inbox;
