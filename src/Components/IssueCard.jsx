import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function IssueCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInProgress = () => {
    handleClose();
    console.log("In Progress clicked");
  };

  const handleDone = () => {
    handleClose();
    console.log("Done clicked");
  };

  const handleEdit = () => {
    handleClose();
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    handleClose();
    console.log("Delete clicked");
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center">
        <span className="font-medium">Create Navbar</span>
        <div>
          <MoreVertIcon className="cursor-pointer" onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleInProgress}>In Progress</MenuItem>
            <MenuItem onClick={handleDone}>Done</MenuItem>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">FBP - {1}</p>
        <div className="flex items-center gap-2">
          {[1].map((item) => (
            <AccountCircleIcon key={item} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IssueCard;