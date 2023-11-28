import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addMarketingCenter } from "@/state";
import Swal from "sweetalert2";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const EventsController = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.global.userId);

  const fileInputRef = useRef(null);
  const [input, setInput] = useState({
    userId: userId,
    companyId: data.user.company.id,
    title: "",
    description: "",
    link: "",
    imageURL: "",
    image: "",
    eventDate: dayjs(),
    startTime: dayjs(),
    endTime: dayjs(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addMarketingCenter(input)).then(() => {
        Swal.fire({
          title: "Saved",
          text: "Events was added Successfully",
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
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="title"
                    variant="outlined"
                    color="secondary"
                    label="Title"
                    onChange={handleChange}
                    value={input.title}
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
                  <TextField
                    type="text"
                    name="link"
                    variant="outlined"
                    color="secondary"
                    label="Link"
                    onChange={handleChange}
                    value={input.link}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Event Date"
                              name="eventDate"
                              value={input.eventDate}
                              slotProps={{ textField: { fullWidth: true } }}
                              onChange={(newValue) =>
                                setInput({
                                  ...input,
                                  eventDate: newValue,
                                })
                              }
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["TimePicker"]}>
                          <TimePicker
                            label="Start Time"
                            name="startTime"
                            value={input.startTime}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                startTime: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["TimePicker"]}>
                          <TimePicker
                            label="End Time"
                            name="endTime"
                            value={input.endTime}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                endTime: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          maxWidth: 200,
                          maxHeight: 100,
                          objectFit: "fill",
                          height: "100%",
                        }}
                        image={
                          input.imageURL != ""
                            ? input.imageURL
                            : "https://placehold.co/600x400"
                        }
                        alt=""
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Button variant="contained" component="label">
                        Upload Image
                        <input
                          type="file"
                          name="image"
                          onChange={(e) => {
                            setInput({
                              ...input,
                              image: e.target.files[0],
                              imageURL: URL.createObjectURL(e.target.files[0]),
                            });
                          }}
                          hidden
                          ref={fileInputRef}
                        />
                      </Button>
                    </Grid>
                  </Grid>
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

export default EventsController;
