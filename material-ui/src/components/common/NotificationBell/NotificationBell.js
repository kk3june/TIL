import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Tooltip } from "@mui/material";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotification = `You have new ${badgeContent} notifications.`;
  const noNotification = `No new notification.`;

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={badgeContent > 0 ? newNotification : noNotification}>
        <IconButton color={iconColor} onClick={handleOpen} anchorEl={anchorEl}>
          <Badge badgeContent={badgeContent} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
};

export default NotificationBell;
