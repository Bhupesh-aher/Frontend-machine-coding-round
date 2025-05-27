import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import BlogPosts from './Blog Post/BlogPosts';




function App() {

    return (
      <div className='app'>
       <BlogPosts/>
      </div>
    )
}

export default App