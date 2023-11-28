import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const TransactionRadioGroup = ({ title, onRadioChange }) => {
  const handleRadioChange = (event) => {
    onRadioChange(title, event.target.value);
  };

  return (
    <React.Fragment>
      <FormControl key={title}>
        <FormLabel id="radio-buttons-group-label">{title}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </React.Fragment>  
  );
};

export default TransactionRadioGroup;
