import React from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "@mui/system";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridWrapper from "../../components/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";

const Authentication = () => {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log("click");
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
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
            sx={cardHeaderStyles.addUserButton}
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
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
    </GridWrapper>
  );
};

export default Authentication;
