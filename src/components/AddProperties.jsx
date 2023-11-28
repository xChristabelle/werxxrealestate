import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  CardMedia,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
  FormControl,
  useTheme,
  Autocomplete,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  useGetAgentsListQuery,
  useGetTransactionTypeListQuery,
  useGetPropertyTypeListQuery,
  useGetPropertyStatusListQuery,
  useGetSourceListQuery,
} from "@/state/api";
import { addProperties } from "@/state";
import { State, City } from "country-state-city";
import Swal from "sweetalert2";
import dayjs from "dayjs";

const AddProperties = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.global.userId);

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const [input, setInput] = useState({
    userId: userId,
    mls: "",
    transactionType: "",
    propertyType: "",
    propertyStatus: "",
    street: "",
    city: "",
    states: "",
    statesAbbr: "",
    postalCode: "",
    salesPrice: "",
    units: "",
    commission: "",
    bonus: "",
    source: "",
    transactionCoordinatorFee: "",
    splitPaid: "",
    officeFees: "",
    agent: "",
    escrowCompany: "",
    mortgageCompany: "",
    contractStartDate: dayjs(),
    contractExpirationDate: dayjs(),
    openEscrowDate: dayjs(),
    closingDate: dayjs(),
    image: "",
    imageURL: "",
  });
  1;
  const { data: getAgentsListData, isLoading: isLoadingAgentsList } =
    useGetAgentsListQuery();

  const {
    data: getTransactionTypeListData,
    isLoading: isLoadingTransactionTypeList,
  } = useGetTransactionTypeListQuery();

  const {
    data: getPropertyTypeListData,
    isLoading: isLoadingPropertyTypeList,
  } = useGetPropertyTypeListQuery();

  const {
    data: getPropertyStatusListData,
    isLoading: isLoadingPropertyStatusList,
  } = useGetPropertyStatusListQuery();

  const { data: getSourceListData, isLoading: isLoadingSourceList } =
    useGetSourceListQuery();

  const fileInputRef = useRef(null);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addProperties(input)).then(() => {
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

  const handleAutoChange = (e, newValue, name) => {
    setInput({
      ...input,
      [name]: newValue,
    });
  };

  const handleStateChange = (e, newValue) => {
    setSelectedState(newValue);
    setInput({
      ...input,
      states: newValue,
      statesAbbr: newValue.isoCode,
      city: "",
    });
  };

  const handleCityChange = (e, newValue) => {
    setInput({
      ...input,
      city: newValue,
    });
  };

  const states = State.getStatesOfCountry("US");
  useEffect(() => {
    if (selectedState) {
      const stateAbbr = selectedState.isoCode;
      const cities = City.getCitiesOfState("US", stateAbbr);
      setCities(cities);
    }
  }, [selectedState]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* Property Information */}
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Typography variant="h4">Property Information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="mls"
                    variant="outlined"
                    color="secondary"
                    label="MLS Number"
                    onChange={handleChange}
                    value={input.mls}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    {!isLoadingTransactionTypeList && (
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="transaction-type"
                          options={getTransactionTypeListData || []}
                          sx={{ width: "100%" }}
                          value={input.transactionType || ""}
                          getOptionLabel={(option) =>
                            option.transaction?.name || ""
                          }
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "transactionType")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Transaction Type" />
                          )}
                        />
                      </FormControl>
                    )}
                    {!isLoadingPropertyTypeList && (
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="property-type"
                          options={getPropertyTypeListData || []}
                          sx={{ width: "100%" }}
                          value={input.propertyType || ""}
                          getOptionLabel={(option) =>
                            option.property?.name || ""
                          }
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "propertyType")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Property Type" />
                          )}
                        />
                      </FormControl>
                    )}
                    {!isLoadingPropertyStatusList && (
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="property-status"
                          options={getPropertyStatusListData || []}
                          sx={{ width: "100%" }}
                          value={input.propertyStatus || ""}
                          getOptionLabel={(option) =>
                            option.property?.name || ""
                          }
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "propertyStatus")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Property Status" />
                          )}
                        />
                      </FormControl>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* Address Information */}
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Typography variant="h4">Address Information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="street"
                    variant="outlined"
                    color="secondary"
                    label="Street"
                    onChange={handleChange}
                    value={input.street}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <Autocomplete
                        disablePortal
                        id="states"
                        options={states || []}
                        sx={{ width: "100%" }}
                        value={input.states || ""}
                        getOptionLabel={(option) => option.name || ""}
                        isOptionEqualToValue={(option, value) =>
                          option.id === value.id
                        }
                        onChange={(e, newValue) =>
                          handleStateChange(e, newValue)
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="State" />
                        )}
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <Autocomplete
                        disablePortal
                        id="cities"
                        options={cities || []}
                        sx={{ width: "100%" }}
                        value={input.city || ""}
                        getOptionLabel={(option) => option.name || ""}
                        isOptionEqualToValue={(option, value) =>
                          option.id === value.id
                        }
                        onChange={(e, newValue) =>
                          handleCityChange(e, newValue)
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="City" />
                        )}
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="postalCode"
                        variant="outlined"
                        color="secondary"
                        label="Postal Code"
                        onChange={handleChange}
                        value={input.postalCode}
                        fullWidth
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* Price Information */}
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Typography variant="h4">Price Information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="salesPrice"
                        variant="outlined"
                        color="secondary"
                        label="Sales Price"
                        onChange={handleChange}
                        value={input.salesPrice}
                        fullWidth
                        required
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="units"
                        variant="outlined"
                        color="secondary"
                        label="Units"
                        onChange={handleChange}
                        value={input.units}
                        fullWidth
                        required
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="commission"
                        variant="outlined"
                        color="secondary"
                        label="Commission"
                        onChange={handleChange}
                        value={input.commission}
                        fullWidth
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="bonus"
                        variant="outlined"
                        color="secondary"
                        label="Bonus"
                        onChange={handleChange}
                        value={input.bonus}
                        fullWidth
                        required
                      />
                    </FormControl>
                    {!isLoadingSourceList && (
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="source-label"
                          options={getSourceListData || []}
                          sx={{ width: "100%" }}
                          value={input.source || ""}
                          getOptionLabel={(option) => option.source?.name || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                          }
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "source")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Source" />
                          )}
                        />
                      </FormControl>
                    )}
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="transactionCoordinatorFee"
                        variant="outlined"
                        color="secondary"
                        label="Transaction Coordinator Fee"
                        onChange={handleChange}
                        value={input.transactionCoordinatorFee}
                        fullWidth
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="splitPaid"
                        variant="outlined"
                        color="secondary"
                        label="Split Paid"
                        onChange={handleChange}
                        value={input.splitPaid}
                        fullWidth
                        required
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="officeFees"
                        variant="outlined"
                        color="secondary"
                        label="Office Fees"
                        onChange={handleChange}
                        value={input.officeFees}
                        fullWidth
                        required
                      />
                    </FormControl>
                    {!isLoadingAgentsList && (
                      <FormControl fullWidth>
                        <Autocomplete
                          disablePortal
                          id="agent"
                          options={getAgentsListData || []}
                          sx={{ width: "100%" }}
                          value={input.agent || ""}
                          getOptionLabel={(option) => {
                            return option.userInformation?.firstName || "";
                          }}
                          isOptionEqualToValue={(option, value) => {
                            return option._id === value._id;
                          }}
                          onChange={(e, newValue) =>
                            handleAutoChange(e, newValue, "agent")
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Agent" />
                          )}
                        />
                      </FormControl>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="escrowCompany"
                        variant="outlined"
                        color="secondary"
                        label="Escrow Company"
                        onChange={handleChange}
                        value={input.escrowCompany}
                        fullWidth
                        required
                      />
                    </FormControl>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        name="mortgageCompany"
                        variant="outlined"
                        color="secondary"
                        label="Mortgage Company"
                        onChange={handleChange}
                        value={input.mortgageCompany}
                        fullWidth
                        required
                      />
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* Date Information */}
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Typography variant="h4">Date Information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Contract Start Date"
                            name="contractStartDate"
                            value={input.contractStartDate}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                contractStartDate: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Contract Expiration Date"
                            name="contractExpirationDate"
                            value={input.contractExpirationDate}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                contractExpirationDate: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={3} direction="row">
                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Open Escrow Date"
                            name="openEscrowDate"
                            value={input.openEscrowDate}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                openEscrowDate: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Closing Date"
                            name="closingDate"
                            value={input.closingDate}
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newValue) =>
                              setInput({
                                ...input,
                                closingDate: newValue,
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                  </Stack>
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
                      maxWidth: 512,
                      maxHeight: 256,
                      objectFit: "fill",
                      height: "100%",
                      width: "100%",
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
        </Box>
      </form>
    </React.Fragment>
  );
};

export default AddProperties;
