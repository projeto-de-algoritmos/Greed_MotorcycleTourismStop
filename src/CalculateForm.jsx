import "./assets/styles.css";

export default function CalculateForm({rangeRef}) {
  const handleSubmit = e => {
    // TODO
    e.preventDefault();
  };

  return (
    <form className="range-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Range:</label>
        <input
          type="number"
          onChange={e => {rangeRef.current = e.target.value}}
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