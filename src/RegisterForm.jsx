import { useState } from "react";
import "./assets/styles.css";

export default function Register({gasStationsState}) {
  const [gasStations, setGasStations] = gasStationsState;
  const [newGasStation, setNewGasStation] = useState({
    name: "",
    kilometer: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    setGasStations([...gasStations, newGasStation]);
  };

  return (
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
  );
}