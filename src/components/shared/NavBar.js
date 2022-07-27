import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeClassName = 'nav-link-active';
  return (
    <header className="header">
      <nav className="navbar">
        <div>
          <h2>Space Travelers Hub </h2>
        </div>
        <ul className="nav-menu list">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-link border-left">
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
