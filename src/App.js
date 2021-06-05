import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/index.js'
import Count from './components/Count'
import Control from './components/Control'

function App() {
 //reducer function
  return (
    <Provider store ={store}>
    <div className="App">
     <h2> Redux Implemantation</h2>
     <Count />
     <Control/>
    </div>
    </Provider>
  );
}

export default App ;
