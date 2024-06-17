import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Badge } from "@mui/material";

function ProjectCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    handleClose();
    console.log("Update clicked");
  };

  const handleDelete = () => {
    handleClose();
    console.log("Delete clicked");
  };

  return (
    <div className="p-5 bg-white rounded shadow-md space-y-5 mt-10">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="cursor-pointer font-bold text-lg">
              Create Ecommerce Project
            </h1>
            <span className="text-gray-400">•</span>
            <p className="text-sm text-gray-400">Fullstack</p>
          </div>
          <div>
            <MoreVertIcon className="cursor-pointer" onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleUpdate}>Update</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
        <p className="text-left text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-5">
        {["Front end", "Back end", "API", "Design"].map((label, index) => (
          <Badge key={index} className="border border-gray-300 p-1 rounded-md text-gray-700">
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
