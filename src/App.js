import React from 'react';
import './App.scss';

import {Home, Nav, Footer} from './components'
import {Circle} from 'react-preloaders';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
      <Circle/>
    </div>
  );
}

export default App;
