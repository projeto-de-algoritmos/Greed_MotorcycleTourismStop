import { useRef } from "react";
import "./assets/styles.css";

export default function CalculateForm({gasStationsState}) {
  const [gasStations, setGasStations] = gasStationsState;
  const gasMileageRef = useRef(0);
  const distanceRef = useRef(0);

  const handleSubmit = e => {
    e.preventDefault();
    if (gasStations.length < 3) return alert("Add at least one gas station!");

    let gasMileage = gasMileageRef.current;
    let distance = distanceRef.current;

    const clonedGasStations = JSON.parse(JSON.stringify(gasStations));
    clonedGasStations.unshift({ name: "origin", kilometer: 0, selected: false })
    clonedGasStations.push({ name: "target", kilometer: distance, selected: false })
    clonedGasStations.sort((a, b) => a.kilometer - b.kilometer);

    const indexes = [];
    let currentGasMileage = gasMileage;

    for (let i = 0; i < clonedGasStations.length; i++) {
      if (clonedGasStations[i].name === 'target') {
        console.log('cheguei')
        break;
      }

      const proxPosto = clonedGasStations[i+1].kilometer
      if (proxPosto > currentGasMileage) {
        currentGasMileage = gasMileage + clonedGasStations[i].kilometer;
        clonedGasStations[i].selected = true;
        indexes.push(i);

        if (proxPosto > currentGasMileage) {
          console.log('nao chego')
          break;
        }
      }
    }

    console.log(clonedGasStations)
  }

  return (
    <form className="range-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Travel Distance:</label>
        <input
          type="number"
          onChange={e => {distanceRef.current = parseInt(e.target.value)}}
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label>Gas Mileage:</label>
        <input
          type="number"
          onChange={e => {gasMileageRef.current = parseInt(e.target.value)}}
          className="input"
          required
        />
      </div>
      <button className="button" type="submit">
        Calculate
      </button>
    </form>
  );
}