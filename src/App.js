import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/tours";
import Home from "./components/Home/home";



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        
        <Routes>
          <Route>
            <Route path="/Home" element={<Home />} />
            <Route path="/tours" element ={<TourList />}/>
            
            
          </Route>
        </Routes>
      </Router>
    );
  }
}


export default App;
