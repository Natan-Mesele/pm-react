import React from "react";
import { Menu, MenuItem } from "@mui/material";

function UserList({ anchorEl, open, onClose, users }) {
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={onClose}
    >
      {users.map((user, index) => (
        <MenuItem key={index} onClick={onClose}>
          {user.name}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default UserList;
