import React, {Component} from 'react';
import '../Styles/Header.css';
import { AuthContext } from '../Contexts/Authcontext';

class Header extends Component {
    static contextType = AuthContext;
    render() {
        const { currentUser, logout } = this.context;
        return (
            <header className='header'>
                <h1> Development Task 1</h1>
                {currentUser.currentUser ? (
          <div className="user-info">
            <span>{currentUser.currentUser.email}</span>
            
            <button className='logout-btn' onClick={logout}>Logout</button>
          </div>
        ) : null }
            </header>
        );
    }
}

export default Header;