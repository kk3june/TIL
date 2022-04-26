import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentification = () => {
  // 왜 이렇게 하면 버튼 기본색이 빨강이었다가 hover 되면 default 값으로 돌아오나?
  const buttonStyles = {
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  };
  return (
    <Grid item xs={8}>
      Authentification
      <CommonButton size="large" variant="contained" sx={buttonStyles}>
        Text
      </CommonButton>
      <CommonButton size="large" variant="outlined" sx={buttonStyles}>
        Text2
      </CommonButton>
      <CommonButton size="large" variant="outlined">
        Text3
      </CommonButton>
    </Grid>
  );
};

export default Authentification;
