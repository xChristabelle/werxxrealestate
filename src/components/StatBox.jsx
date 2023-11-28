import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import StatusChart from "./StatusChart";

const StatBox = ({
  title,
  value,
  increase,
  icon,
  description,
  hideDescription = false,
  chartSize = 70,
  size = "lg",
}) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow={"span " + (size == "lg" ? 2 : 1)}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p="1.5rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
    >
      <FlexBetween sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.secondary[100],
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </FlexBetween>

      <FlexBetween
        sx={{
          height: "100%",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <StatusChart value={value} chartSize={chartSize} />
      </FlexBetween>

      {!hideDescription && (
        <FlexBetween gap="">
          <Typography
            variant="h5"
            sx={{ color: theme.palette.secondary.light }}
          >
            {increase}
          </Typography>
          <Typography variant="h5">{description}</Typography>
        </FlexBetween>
      )}
    </Box>
  );
};

export default StatBox;
