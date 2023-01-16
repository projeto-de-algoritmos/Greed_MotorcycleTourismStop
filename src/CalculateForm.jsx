import { useRef } from "react";
import "./assets/styles.css";

export default function CalculateForm({gasStationsState}) {
  const [gasStations, setGasStations] = gasStationsState;
  const gasMileageRef = useRef(0);

  const handleSubmit = e => {
    e.preventDefault();
    if(gasStations.length === 0) return;

    let stop = null;
    let error = false;
    let gasMileage = parseInt(gasMileageRef.current);
    const result = [];

    for(let i = 0; i < gasStations.length; i++) {
      if(gasStations[i].kilometer <= gasMileage) {
        stop = gasStations[i];
      }else if(stop !== null){
        result.push(stop);
        gasMileage = parseInt(gasMileageRef.current) + parseInt(stop.kilometer);
        stop = null;
        i--;
      }else{
        error = true;
        break;
      }
    }
    if(stop !== null) result.push(stop);

    if(error) {
      alert("The travel is not possible to complete!");
    }else if(result.length === 0){
      alert("Not stop needed!");
    }else{
      alert("Stops calculation complete!");
      setGasStations(result);
    }

  };

  return (
    <form className="range-form" onSubmit={handleSubmit}>
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