import React from 'react';
import myimage from '../assets/12.jpg'

const App = () => (
  <div>
    This is App componnent
    <img src={`${myimage}`} alt='myimage not loaded' />
  </div>
);

export default App;
