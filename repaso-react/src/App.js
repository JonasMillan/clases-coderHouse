import React from 'react'
import './App.css';
import Hola from './components/Hola'
import Counter from './components/Counter'
import Lista from './components/Lista'

const arr = [1,2,3,4,5,6]

function App() {
  return (
    <div>
      <Hola mensaje='este es mi counter' nombre='pepe'/>
      <Counter/>
      <Lista lista={arr}/>
    </div>
  );
}

export default App;
