import React, { useState } from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import PDF from "@/components/PDF";

import { useGetCDAQuery } from "@/state/api";

const ViewCDA = ({ show, close, id }) => {

  const { data, isLoading } = useGetCDAQuery(id);
  console.log("🚀 ~ file: ViewCDA.jsx:11 ~ ViewCDA ~ data:", data)

  const styleCDA = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={show}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleCDA}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                pb={1}
              >
                Commission Disbursement Authorization
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {!isLoading && <PDF file={data.document.fileURL} />}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ViewCDA;
