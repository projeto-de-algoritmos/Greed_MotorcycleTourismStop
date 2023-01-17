import "./assets/styles.css";
import { Icon } from '@iconify/react';

export default function List({gasStationsState}) {
  const [gasStations, setGasStations] = gasStationsState;

  const removeItem = index => {
    let newGasStationsState = gasStations;
    newGasStationsState.splice(index, 1);
    setGasStations([...newGasStationsState]);
  }

  return (
    <div className="gas-stations-list">
      <h2 className="list-title">Available Gas Stations</h2>
      <div className="header">
        <span>Name</span>
        <span>position</span>
        <span>actions</span>
      </div>
      <ul>
        {gasStations.map((station, index) => (
          (station.name !== "origin" && station.name !== "target") &&
          <li key={index} id={index}>
            <span>{station.name}</span>
            <span>KM-{station.kilometer}</span>
            <Icon className="remove" icon="mdi:trash-can-outline" onClick={() => {removeItem(index)}} />
          </li>
        ))}
      </ul>
    </div>
  );
}