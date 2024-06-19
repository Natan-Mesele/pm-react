import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewProject from "./NewProject";

function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("User logged out");
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
        <img
          src="path/to/user-image.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <button
          className="hover:text-gray-300 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <NewProject open={dialogOpen} handleClose={handleDialogClose} />
    </header>
  );
}

export default Header;
