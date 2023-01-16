import React, { useRef, useState } from "react";
import "./assets/styles.css";

import CalculateForm from "./CalculateForm";
import Register from "./RegisterForm";
import List from "./ListForm";

function App() {
  const [gasStations, setGasStations] = useState([]);
  const range = useRef(0);

  return (
    <div className="main">
      <h1 className="title">Motorcycle Tourism Stop</h1>
      <div className="content">
        <Register gasStationsState={[gasStations, setGasStations]}/>
        <List gasStationsState={[gasStations, setGasStations]}/>
        <CalculateForm rangeRef={range}/>
      </div>
    </div>
  );
}

export default App;
