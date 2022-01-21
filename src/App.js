import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import Home from "./components/Home/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        
        <TourList />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
      </React.Fragment>

    
    );
  }

}


export default App;
