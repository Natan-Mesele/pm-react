import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-gray-300" to="/ProjectList">Project Management</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/new-project">New Project</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/upgrade">Upgrade</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
