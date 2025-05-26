import React from 'react';
import './index.css';
import Apps from './Product Store/Apps';
import { BrowserRouter } from 'react-router-dom';




function App() {

    return (
      <div className='app'>
        <BrowserRouter>     
         <Apps/>
         </BrowserRouter> 
      </div>
    )
}

export default App