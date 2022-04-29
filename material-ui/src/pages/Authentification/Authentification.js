import React from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "@mui/system";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { IconButton, Grid, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Authentication = () => {
  const getHeader = () => {
    const headerStyles = {
      wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        margin: "20px",
        height: "65px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      },
      addUserButton: {
        fontSize: "1.05rem",
      },
    };
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log("click");
    };

    return (
      <Box sx={headerStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UDI"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            size="large"
            onClick={addUser}
            sx={headerStyles.addUserButton}
          >
            Add User
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    return (
      <Typography
        align="center"
        sx={{
          margin: "40px 16px",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.3rem",
        }}
      >
        No users for this project yet.
      </Typography>
    );
  };

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
      <BasicCard header={getHeader()} content={getContent()} />
    </Grid>
  );
};

export default Authentication;
