import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import "./index.css";

function App() {
  return (
    <>
    <Menu/>
      <Routes>
        <Route exact path="/" Component={About} />
        <Route path="/contact" Component={Contact}/>
        <Route Component={Error} />
      </Routes>
    </>
  );
}

export default App;
