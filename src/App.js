import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import "./app.scss";

import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/tours";
import Home from "./components/Home/home";
import About from "./components/About/about"



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element ={<TourList />}/>
            <Route path="/about" element ={<About />}/>
            
          </Route>
        </Routes>
      </Router>
    );
  }
}


export default App;
