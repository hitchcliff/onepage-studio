import React from 'react';
import './App.scss';

import {Home, Nav, Footer} from './components'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
