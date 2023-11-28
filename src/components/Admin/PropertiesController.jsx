import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const PropertiesController = ({ data, state }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    userId: data.user._id,
    companyId: data.user.company.id,
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(state(input)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "Properties was added Successfully",
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
            // setInput({ name: "", description: "" });
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
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="name"
                    variant="outlined"
                    color="secondary"
                    label="Name"
                    onChange={handleChange}
                    value={input.name}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="description"
                    variant="outlined"
                    color="secondary"
                    label="Description"
                    onChange={handleChange}
                    value={input.description}
                    multiline
                    rows={5}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default PropertiesController;
