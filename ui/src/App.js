import React, { Component } from 'react'

import './App.css';
// import Hola from './components/Hola.js';
// import Lista from './components/Lista.js';
// import FizzBuzz from './components/FizzBuzz.js';
// import Container from './components/Container.js';
// import FetchContainer from './components/FetchContainer'
import Todo from './components/Todo'
// const lista = [
//   {
//     nombre: 'jonas',
//     id: '1'
//   },
//   {
//     nombre: 'pepe',
//     id: '2'
//   }
// ]

// const arr = [1,2,3,4,5,6]


class App extends Component {

  state={
    json: '',
    show: true
  }

  componentWillMount(){
    fetch('http://klassi.herokuapp.com/api/alumnos/5d0c05b9e9add9369cbd5ba7')
    .then( response => response.json())
    .then( json => this.setState({json}))
  }
  toggle = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className='App'>
        {/* 
        <Hola 
          saludo='hola'
          persona='pepe'
          fin='como estas?'
        />
        <Lista lista={lista}/>  
        <FizzBuzz arr={arr}/> 
        <Container/> */}

        {/* handler asincrono */}
        {
          // (this.state.json !== '') && this.state.json.result.nombre
        }
{/* 
        {
          // (this.state.show) ? <FetchContainer json={this.state.json} /> : ''
        } */}
        {/* <button onClick={this.toggle}>SHOW</button> */}
        <Todo/>
      </div>
    )
  }
}




export default App;
