import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // name of component
    MuiButton: {
      styleOverrides: {
        // name of slot
        root: {
          // some
          fontSize: "3rem",
        },
      },
    },
  },
});
