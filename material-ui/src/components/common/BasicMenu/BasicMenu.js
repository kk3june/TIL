import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu({
  anchorEl,
  open,
  handleClose,
  notifications,
}) {
  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
      {notifications.map((item) => (
        <MenuItem id={item.id} onClick={handleClose}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
