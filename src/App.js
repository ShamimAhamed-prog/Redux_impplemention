import React from 'react';
import { createStore } from 'redux' 
import './App.css';

function App() {
 //reducer function
 const reducer =(state, action) => {
   if(action.type === 'A'){
     return {
       A: 'I am A'
     }

   }
if (action.type ==='B'){
  return{
    B: 'I am B'
  }
}
   
  return state
 }

  const store =createStore(reducer);

  store.subscribe(() =>
  {
    console.log(store.getState())
  })
  store.dispatch({type :'A'});
  store.dispatch({type :'something'});
  store.dispatch({type :'B'});
  store.dispatch({type :'something'});

  
  return (
    <div className="App">
     <h2> Redux Implemantation</h2>
    </div>
  );
}

export default App;
