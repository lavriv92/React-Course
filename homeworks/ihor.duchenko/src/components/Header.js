import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="py-3 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <NavLink to="/">
              <img height="50" src={logo} alt="App logo"/>
            </NavLink>
          </div>
          <div className="col-auto ml-auto">
            <nav className="mx-n2">
              <NavLink className="px-2" to="/form">
                Form
              </NavLink>
              <NavLink className="px-2" to="/auth-context">
                Auth Context
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;