import React from 'react';
import {NavLink} from 'react-router-dom';

const AppBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>

        <ul className='navbar-nav ms-auto'>
          <li>
            <NavLink className="nav-link" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about-us">About us</NavLink>
          </li>
          <li>
            <NavLink className="nav-link " to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppBar;