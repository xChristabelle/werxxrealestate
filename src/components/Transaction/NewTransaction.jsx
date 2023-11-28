import React, { useState } from "react";
import { Button, Box, Grid, Autocomplete, TextField } from "@mui/material";
import TransactionRadioGroup from "@/components/Transaction/TransactionRadioGroup";

const NewTransaction = () => {
  const [selectedRepresentingButton, setSelectedRepresentingButton] =
    useState("Buyer");
  const [selectedTransactionType, setSelectedTransactionType] = useState(null);
  const [selectedSellerType, setSelectedSellerType] = useState(null);
  const [radioValues, setRadioValues] = useState({});
  console.log(
    "🚀 ~ file: NewTransaction.jsx:11 ~ NewTransaction ~ radioValues:",
    radioValues
  );

  const handleButtonClick = (buttonNumber) => {
    setSelectedRepresentingButton(buttonNumber);
  };

  const handleTransactionTypeChange = (event, newValue) => {
    setSelectedTransactionType(newValue);
  };

  const handleSellerTypeChange = (event, newValue) => {
    setSelectedSellerType(newValue);
  };

  const handleRadioChange = (groupName, value) => {
    setRadioValues((prevValues) => ({
      ...prevValues,
      [groupName]: value,
    }));
  };

  const transactionType = [
    { label: "Buyer Residential Property", representing: "Buyer" },
    { label: "Buyer Commercial Property", representing: "Buyer" },
    { label: "Buyer Vacant Land", representing: "Buyer" },
    { label: "Buyer Mobile Home", representing: "Buyer" },
    { label: "Buyer New Construction", representing: "Buyer" },

    { label: "Seller Residential Property", representing: "Seller" },
    { label: "Seller Commercial Listing", representing: "Seller" },
    { label: "Seller Vacant Land", representing: "Seller" },
    { label: "Seller Mobile Home", representing: "Seller" },

    { label: "Seller - Referral", representing: "Referral" },
    { label: "Buyer - Referral", representing: "Referral" },
    { label: "Referral", representing: "Referral" },

    { label: "Lease", representing: "Lease" },
  ];

  const getTransactionOptions = () => {
    if (selectedRepresentingButton === "Buyer") {
      // Define options based on the selected buyer type
      if (selectedTransactionType !== null) {
        if (selectedTransactionType.label !== "Buyer New Construction") {
          return [
            "Conventional (Human)",
            "Trust Non-Exempt",
            "Trust Exempt",
            "Probate",
            "Corporation",
          ];
        } else {
          return ["Buyer New Construction"];
        }
        // Add more conditions for other buyer types as needed
      }
    }
    // Handle other representing buttons if necessary
    return [];
  };

  const SellerType = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is the buyer using a VA loan?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is the buyer using an FHA loan?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is there a tenant in the property?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is the buyer an entity?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Was the home built prior to 1978?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Was the home built prior to 1960?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is the property in an HOA?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Is this a short sale?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionRadioGroup
            title="Are buyer and seller using a non-C.A.R. contract?"
            onRadioChange={handleRadioChange}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            variant={
              selectedRepresentingButton === "Buyer" ? "contained" : "outlined"
            }
            fullWidth
            onClick={() => handleButtonClick("Buyer")}
          >
            Buyer
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant={
              selectedRepresentingButton === "Seller" ? "contained" : "outlined"
            }
            fullWidth
            onClick={() => handleButtonClick("Seller")}
          >
            Seller
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant={
              selectedRepresentingButton === "Referral"
                ? "contained"
                : "outlined"
            }
            fullWidth
            onClick={() => handleButtonClick("Referral")}
          >
            Referral
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant={
              selectedRepresentingButton === "Lease" ? "contained" : "outlined"
            }
            fullWidth
            onClick={() => handleButtonClick("Lease")}
          >
            Lease
          </Button>
        </Grid>
      </Grid>
      <Box p={3} mt={2} hidden={selectedRepresentingButton !== "Buyer"}>
        <Autocomplete
          disablePortal
          id="transaction-type-buyer"
          options={transactionType.filter(
            (item) => item.representing === "Buyer"
          )}
          sx={{ width: "100%" }}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="Transaction Type" />
          )}
          onChange={handleTransactionTypeChange}
        />

        <Box pt={3} hidden={!selectedTransactionType}>
          <Autocomplete
            disablePortal
            id="seller-type"
            options={getTransactionOptions()}
            sx={{ width: "100%" }}
            getOptionLabel={(option) => option || ""}
            renderInput={(params) => (
              <TextField {...params} label="Seller Type" />
            )}
            onChange={handleSellerTypeChange}
          />
          <Box pt={3} hidden={!selectedSellerType}>
            <SellerType />
          </Box>
        </Box>
      </Box>

      <Box p={3} mt={2} hidden={selectedRepresentingButton !== "Seller"}>
        <Autocomplete
          disablePortal
          id="transaction-type-seller"
          options={transactionType.filter(
            (item) => item.representing === "Seller"
          )}
          sx={{ width: "100%" }}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="Transaction Type" />
          )}
        />
      </Box>
      <Box p={3} mt={2} hidden={selectedRepresentingButton !== "Referral"}>
        <Autocomplete
          disablePortal
          id="transaction-type-referral"
          options={transactionType.filter(
            (item) => item.representing === "Referral"
          )}
          sx={{ width: "100%" }}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="Transaction Type" />
          )}
        />
      </Box>
      <Box p={3} mt={2} hidden={selectedRepresentingButton !== "Lease"}>
        <Autocomplete
          disablePortal
          id="transaction-type-lease"
          options={transactionType.filter(
            (item) => item.representing === "Lease"
          )}
          sx={{ width: "100%" }}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="Transaction Type" />
          )}
        />
      </Box>
    </React.Fragment>
  );
};

export default NewTransaction;
