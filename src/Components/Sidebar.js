import React, { Component } from 'react';
import '../Styles/Sidebar.css';

class Sidebar extends Component {
  render() {
    const { activePage, navigateTo } = this.props;


    return (
      <nav className="sidebar">
        <ul>
          <li
            className={activePage.currentPage === 1 ? 'active' : ''}
            onClick={() => navigateTo(1)}
          >
            Page 1
          </li>
          <li
            className={activePage.currentPage === 2 ? 'active' : ''}
            onClick={() => navigateTo(2)}
          >
            Page 2
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
