import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addAgent } from "@/state";
import Swal from "sweetalert2";

const AddAgents = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.global.userId);

  console.log("🚀 ~ file: AddAgents.jsx:10 ~ AddAgents ~ data:", data)

  const [input, setInput] = useState({
    userId: userId,
    companyId: data.user.company.id,
    firstName: "",
    middleName: "",
    lastName: "",
    dre: "",
    email: "",
    phoneNumber: "",
    closingGoal: "",
    volumeGoal: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addAgent(input)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "Properties File was added Successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirm",
          allowOutsideClick: false,
          customClass: {
            container: "swal-index",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            // handleClose();
            // setInput("");
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Agent Information</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="firstName"
                    variant="outlined"
                    color="secondary"
                    label="First Name"
                    onChange={handleChange}
                    value={input.firstName}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="middleName"
                    variant="outlined"
                    color="secondary"
                    label="Middle Name"
                    onChange={handleChange}
                    value={input.middleName}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="lastName"
                    variant="outlined"
                    color="secondary"
                    label="Last Name"
                    onChange={handleChange}
                    value={input.lastName}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    type="text"
                    name="dre"
                    variant="outlined"
                    color="secondary"
                    label="DRE"
                    onChange={handleChange}
                    value={input.dre}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    type="email"
                    name="email"
                    variant="outlined"
                    color="secondary"
                    label="Email Address"
                    onChange={handleChange}
                    value={input.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    name="phoneNumber"
                    variant="outlined"
                    color="secondary"
                    label="Phone Number"
                    onChange={handleChange}
                    value={input.phoneNumber}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    name="closingGoal"
                    variant="outlined"
                    color="secondary"
                    label="Closing Goal"
                    onChange={handleChange}
                    value={input.closingGoal}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    name="volumeGoal"
                    variant="outlined"
                    color="secondary"
                    label="Volume Goal"
                    onChange={handleChange}
                    value={input.volumeGoal}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default AddAgents;
