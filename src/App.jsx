import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState({
    f: 0,
    c: 0,
  });

  const updateC = (ev) =>
    setTemp({
      c: ev.target.value,
      f: ((+ev.target.value * 9) / 5 + 32).toFixed(2),
    });

  const updateF = (ev) =>
    setTemp({
      c: (((+ev.target.value - 32) * 5) / 9).toFixed(2),
      f: ev.target.value,
    });
  return (
    <div className="wrapper">
      {/* <div className="celsius-box">
          <h1>Temperature in Celsius</h1>
          <input type="number" value={temp.c} onChange={updateC} />
        </div>
      <div>
        <h1>Temperature in Fahrenheit</h1>
        <input type="number" value={temp.f} onChange={updateF} />
      </div> */}
      <h1>Temperature Converter</h1>
      <div
        style={{ marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div>
          <p>Degrees</p>
          <input
            type="number"
            style={{ width: "5rem", borderRadius: "5px", padding: "5px"}}
          />
        </div>
        <div>
          <p>Type</p>
          <select
            style={{ borderRadius: "5px", padding: "5px", marginRight: "1rem" }}
          >
            <option>Converting from</option>
            <option value={temp.c}>Celsius</option>
            <option value={temp.f}>Fahrenheit</option>
            <option value={temp.f}>Klein</option>
          </select>
          <select
            style={{ borderRadius: "5px", padding: "5px" }}
          >
            <option>Converting to</option>
            <option value={temp.c}>Celsius</option>
            <option value={temp.f}>Fahrenheit</option>
            <option value={temp.f}>Klein</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ width: "5rem", height: "2rem", marginTop: "3rem", backgroundColor: "blue", color: "white", borderRadius: "5px", border: "none" }}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
