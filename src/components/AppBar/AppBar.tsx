import React from 'react';
import {NavLink} from 'react-router-dom';

const AppBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.platformaservice.com/" target='_blank'>
          <img
            src='https://static1.s123-cdn-static-a.com/uploads/972070/400_5ac1b2eb5122c.png'
            alt='platforma'
            height={60}
          />
        </a>


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
          <li>
            <NavLink className="nav-link " to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppBar;