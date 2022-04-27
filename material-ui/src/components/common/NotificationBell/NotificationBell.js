import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Tooltip } from "@mui/material";

const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotification = `You have new ${badgeContent} notifications.`;
  const noNotification = `No new notification.`;
  return (
    <Tooltip title={badgeContent > 0 ? newNotification : noNotification}>
      <IconButton color={iconColor}>
        <Badge badgeContent={badgeContent} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;
