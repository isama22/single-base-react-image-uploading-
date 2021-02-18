import React from 'react';
import './App.css';
import Home from './Home.js'
import Upload from './Upload.js'

function App() {
  return (
    <div className="App" style={{background: 'grey', width: '100%', height: '100%', position: 'fixed'}}>
      <h5>app</h5>
      <Home/>
      <Upload/>
    </div>
  );
}

export default App;
