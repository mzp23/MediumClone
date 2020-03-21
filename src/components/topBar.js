import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const TopBar = () => {
  return (
    <nav className='navbar navbar-light'>
      <div>
        <Link exact to='/' className='navbaar-brand'>
          Medium
        </Link>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to='/login' className='nav-link'>
              Sign in
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to='/register' className='nav-link'>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
