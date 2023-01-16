import React, { useState } from "react";
import "./assets/styles.css";

import CalculateForm from "./CalculateForm";
import Register from "./RegisterForm";
import List from "./List";

function App() {
  const gasStationsState= useState([]);

  return (
    <div className="main">
      <h1 className="title">Motorcycle Tourism Stop</h1>
      <div className="content">
        <Register gasStationsState={gasStationsState}/>
        <List gasStationsState={gasStationsState}/>
        <CalculateForm gasStationsState={gasStationsState}/>
      </div>
    </div>
  );
}

export default App;
