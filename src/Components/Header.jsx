import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewProject from './NewProject';

function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-gray-300" to="/ProjectList">Project Management</Link>
          </li>
          <li>
            <button className="hover:text-gray-300 focus:outline-none" onClick={handleDialogOpen}>New Project</button>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/upgrade">Upgrade</Link>
          </li>
        </ul>
      </nav>
      <NewProject open={dialogOpen} handleClose={handleDialogClose} />
    </header>
  );
}

export default Header;
