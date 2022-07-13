import React, {useState} from 'react';
import './App.css';

function App() {
  // states
  const [temperature, setTemperature] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState('cold')


  //functions
  const incrementTemp = () => {
    if (temperature === 25) return;
    const newTemperature = temperature + 1
    setTemperature(newTemperature)
    if(newTemperature >= 15) {
      setTemperatureColor('hot')
    }

    
  }

    const decreaseTemp = () => {
      if (temperature === 0) return;
    const newTemperature = temperature - 1
    setTemperature(newTemperature)
    if(newTemperature < 15) {
      setTemperatureColor('cold')
    }
  }



  
  return (
    <div className='container'>
      <div className={`temperature-container ${temperatureColor}`}><h1>{temperature}℃</h1></div>
      <div className='temperature-buttons'>
      <button onClick={() => decreaseTemp()}>-</button>
      <button onClick={() => incrementTemp()}>+</button>
      </div>
    </div>
  );
}

export default App;