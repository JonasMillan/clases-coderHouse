import React, { Component } from 'react'
import Hola from './Hola'
import Botones from './Botones'

class Counter extends Component {
  state = {
    count: 0,
    count2: 0
  }

  sumar = () => this.setState({count: this.state.count + 1})
  restar = () => this.setState({count: this.state.count - 1})
  reset = () => this.setState({count: 0})
  
  render () {
    return (
      <div>
        <Hola mensaje={this.state.count} nombre=''/>
        <Botones sumar={this.sumar} restar={this.restar} reset={this.reset}/>
      </div>
    )
  }
}
export default Counter;