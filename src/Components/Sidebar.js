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
            Add to List
          </li>
          <li
            className={activePage.currentPage === 2 ? 'active' : ''}
            onClick={() => navigateTo(2)}
          >
            Delete from List
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
