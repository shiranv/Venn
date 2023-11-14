import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import './App.css';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="app">
    <Router>
      <Header></Header>
      <Home></Home>
     
    </Router>
  </div>
  );
}

export default App;
