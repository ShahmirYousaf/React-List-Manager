import React , {Component} from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar'
import TextShowing from './Components/TextShowing';
import ListDisplay from './Components/ListDisplay';
import Ad from './Components/Ad'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar navigateTo={this.navigateTo} activePage={this.state}/>
        <div className="main-container">
          <div className="main">
            {this.state.currentPage === 1 && (
              <TextShowing
                navigatePrev={() => this.navigateTo(1)}
                navigateNext={() => this.navigateTo(2)}
                currentPage={this.state.currentPage}
              />
            )}
            {this.state.currentPage === 2 && (
              <ListDisplay
                navigatePrev={() => this.navigateTo(1)}
              />
            )}
          </div>
        </div>
        <Ad />
        <Footer />
      </div>
    );
  }
}


export default App;
