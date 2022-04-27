import React from "react";
import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const Authentication = () => {
  return (
    <Grid item xs={8}>
      This is authentication page.
      <NotificationBell iconColor="primary" badgeContent={3} />
      <BasicMenu />
    </Grid>
  );
};

export default Authentication;
