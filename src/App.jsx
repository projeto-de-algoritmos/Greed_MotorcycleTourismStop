import React, { useState } from "react";
import "./assets/styles.css";

function App() {
  const [gasStations, setGasStations] = useState([
    { name: "teste", kilometer: "1" },
  ]);
  const [newGasStation, setNewGasStation] = useState({
    name: "",
    kilometer: "",
  });
  const [range, setRange] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setGasStations([...gasStations, newGasStation]);
    // setNewGasStation({ name: "", kilometer: "" });
  };

  const handleCalculate = () => {
    // TODO
  };

  return (
    <div className="main">
      <h1 className="title">Motorcycle Tourism Stop</h1>
      <div className="content">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Gas Station Name</label>
            <input
              placeholder="Posto Shell"
              value={newGasStation.name}
              onChange={e =>
                setNewGasStation({ ...newGasStation, name: e.target.value })
              }
              className="input"
            />
          </div>
          <div className="form-field">
            <label>Kilometer</label>
            <input
              placeholder="10"
              type={'number'}
              value={newGasStation.kilometer}
              onChange={e =>
                setNewGasStation({
                  ...newGasStation,
                  kilometer: e.target.value,
                })
              }
              className="input"
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
          </div>
          <ul>
            {gasStations.map((station, index) => (
              <li key={index}>
                <span>{station.name}</span>
                <span>KM-{station.kilometer}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="range-form">
          <div className="form-field">
            <label>Range:</label>
            <input
              value={range}
              onChange={e => setRange(e.target.value)}
              className="input"
            />
          </div>
          <button className="button" onClick={handleCalculate}>
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
