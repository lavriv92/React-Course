import React from 'react';
import { Link } from 'react-router-dom';
import MENU from '../../constants/menu.constant'

class Menu extends React.Component {

  render() {
    return (
      <nav>
        <ul className="nav nav-tabs">
          { MENU.map(item => <li><Link to={item.path}>{item.name}</Link></li>) }
        </ul>
      </nav>
    );
  }
}

export default Menu;