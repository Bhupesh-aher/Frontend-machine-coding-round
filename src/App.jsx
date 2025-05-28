import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import FilterRecipe from './Filter Recipes/Filterrecipe';



function App() {
    return (
      <div className='app'>
       <FilterRecipe/>
      </div>
    )
}

export default App