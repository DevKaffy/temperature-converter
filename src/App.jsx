import { useState } from 'react'
import './App.css'

function App() {
  const [temp, setTemp] = useState({
    f: 0,
    c: 0 })

const updateC = ev => setTemp({
  c: ev.target.value,
  f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
})

const updateF = ev => setTemp({
  c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
  f: ev.target.value
})
  return (
    <div className='wrapper'>
        <div className="celsius-box">
          <h1>Temperature in Celsius</h1>
          <input type="number" value={temp.c} onChange={updateC} />
        </div>
      <div>
        <h1>Temperature in Farenheit</h1>
        <input type="number" value={temp.f} onChange={updateF} />
      </div>
    </div>
  );
}

export default App
