import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
//import TourList from "./components/TourList";

import Home from './components/Pages/home.js';
import About from './components/Pages/about.jsx';
import TourList from './components/Pages/tourList.js';
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path ='/about' element={<About />} />
            <Route exact path ='/tourList' element={<TourList />} />
          </Routes>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
