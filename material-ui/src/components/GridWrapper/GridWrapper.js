import React from "react";
import { Grid } from "@mui/material";

const GridWrapper = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        marginLeft: "320px",
        backgroundColor: "#eaeff1",
        padding: "48px 32px",
        position: "relative",
        minHeight: "calc(100vh - 166px)",
      }}
    >
      {children}
    </Grid>
  );
};

export default GridWrapper;
