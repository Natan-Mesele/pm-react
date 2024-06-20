import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewProject from "./NewProject";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/Auth/Action";

function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(Logout())
    console.log("User logged out");
    handleMenuClose();
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-gray-300" to="/">
              Project Management
            </Link>
          </li>
          <li>
            <button
              className="hover:text-gray-300 focus:outline-none"
              onClick={handleDialogOpen}
            >
              New Project
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <p>{auth.user?.fullName}</p>
      </div>
      <NewProject open={dialogOpen} handleClose={handleDialogClose} />
    </header>
  );
}

export default Header;