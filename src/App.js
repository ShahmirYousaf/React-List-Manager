import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar'
import TextShowing from './Components/TextShowing';
import ListDisplay from './Components/ListDisplay';
import Ad from './Components/Ad'
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoutes';
import { AuthProvider } from './Contexts/Authcontext';

import './App.css';

class App extends Component {

  componentDidMount() {
    console.log("App component has been mounted ")
}

  render() {
    return (
      <Router> 
      <AuthProvider>
          <div className="app">
            <Header />
            <Sidebar />
            <div className="main-container">
              <div className="main">
                <Routes>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <TextShowing />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/page2"
                    element={
                      <PrivateRoute>
                        <ListDisplay />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
            <Ad />
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    );
  }
}


export default App;
