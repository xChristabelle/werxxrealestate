import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Typography, useTheme } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusChart = ({ value, chartSize}) => {
  const [text, setText] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    function fetchData() {
      if (value && value.datasets && value.datasets.length > 0) {
          setText(value.datasets[0].data[0]);
      }
    }
    fetchData();
  }, [value]);

  return (
    <>
      <Doughnut
        data={value}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          cutout: chartSize
        }       
      }
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h1">{text}</Typography>
      </Box>
    </>
  );
};

export default StatusChart;
