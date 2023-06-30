import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Referees from "./components/pages/Referees"
import Home from "./components/pages/Home"
import Fields from "./components/pages/Fields"
import Contact from "./components/pages/Contact"
import Registration from "./components/pages/Registration"

import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/referees" element={<Referees />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>


      </div>
    </>
  )

}

export default App;
