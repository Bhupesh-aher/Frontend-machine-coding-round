import { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import DragDrop from './Drag and Drop/DragDrop';


function App() {
    return (
      <div>
        <DragDrop/>
      </div>
    )
}

export default App;