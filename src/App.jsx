import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import TrafficLight from './Traffic Light/TrafficLight';



function App() {
    return (
      <div className='app'>
        <TrafficLight/>
      </div>
    )
}

export default App