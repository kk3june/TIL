import React from "react";
import { Avatar, Tooltip, Typography, IconButton } from "@mui/material";
import CommonButton from "../CommonButton/CommonButton";
import NotificationBell from "../NotificationBell/NotificationBell";
import HelpIcon from "@mui/icons-material/Help";

const Header = ({ title }) => {
  return (
    <div>
      <CommonButton> Go to DOCS</CommonButton>
      <NotificationBell iconColor="primary" badgeContent={3} />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/2.jpg"
      />

      <div>
        <Typography>{title}</Typography>
        <CommonButton variant="outlined">Web setup</CommonButton>
        <Tooltip title="help">
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
