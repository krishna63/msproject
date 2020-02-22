import React from 'react';
import myimage from '../assets/12.jpg';
import './style/app.pcss';

const App = () => (
  <div className="titleClass">
    This is App component
    <img src={`${myimage}`} alt='myimage not loaded' />
  </div>
);

export default App;
