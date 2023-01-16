import React, { useState } from "react";
import "./assets/styles.css";
import { Icon } from '@iconify/react';

function App() {
  const [gasStations, setGasStations] = useState([]);
  const [newGasStation, setNewGasStation] = useState({
    name: "",
    kilometer: "",
  });
  const [range, setRange] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setGasStations([...gasStations, newGasStation]);
  };

  const handleCalculate = e => {
    // TODO
    e.preventDefault();
  };

  const removeItem = index => {
    let newGasStationsState = gasStations;
    newGasStationsState.splice(index, 1);
    setGasStations([...newGasStationsState]);
  }

  return (
    <div className="main">
      <h1 className="title">Motorcycle Tourism Stop</h1>
      <div className="content">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Gas Station Name</label>
            <input
              placeholder="Posto Shell"
              onChange={e =>
                setNewGasStation({
                  ...newGasStation,
                  name: e.target.value,
                })
              }
              className="input"
              required
            />
          </div>
          <div className="form-field">
            <label>Kilometer</label>
            <input
              placeholder="10"
              type="number"
              onChange={e =>
                setNewGasStation({
                  ...newGasStation,
                  kilometer: e.target.value,
                })
              }
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </form>
        <div className="gas-stations-list">
          <h2 className="list-title">Available Gas Stations</h2>
          <div className="header">
            <span>Name</span>
            <span>position</span>
            <span>actions</span>
          </div>
          <ul>
            {gasStations.map((station, index) => (
              <li key={index}>
                <span>{station.name}</span>
                <span>KM-{station.kilometer}</span>
                <Icon className="remove" icon="mdi:trash-can-outline" onClick={() => {removeItem(index)}} />
              </li>
            ))}
          </ul>
        </div>
        <form className="range-form" onSubmit={handleCalculate}>
          <div className="form-field">
            <label>Range:</label>
            <input
              type="number"
              onChange={e => {setRange(e.target.value)}}
              className="input"
              required
            />
          </div>
          <button className="button" type="submit">
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
