import React, { Component } from 'react';
import '../Styles/Sidebar.css';
import { Link  } from 'react-router-dom';

class Sidebar extends Component {
  render() {

    return (
      <nav className="sidebar">
        <ul>
        <Link className='page-link' to = "/">
          <li>
            Add to List
          </li>
          </Link>
          <Link  className='page-link' to = "/page2"> 
          <li>
            Delete from List
          </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
