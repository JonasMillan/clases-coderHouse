import React, { Component } from 'react'
import Hola from './Hola.js'
import Inputs from './Inputs.js'
import Counter from './Counter.js' 

class Container extends Component {
    
    state = {
        number: 0,
        nombre:'',
        apellido:'',
        saludo: ''
    }

    saludar = () =>  this.setState({saludo:`${this.state.nombre} ${this.state.apellido}`})

    handlChange = name => event => this.setState({[name]: event.target.value})

    // handlChangeNombre = event => this.setState({nombre: event.target.value}, () => console.log(this.state.nombre))

    // handlChangeApellido = event => this.setState({apellido: event.target.value}, () => console.log(this.state.apellido))
    
    increment = () => this.setState({number: this.state.number + 1}, () => console.log(this.state.number))
    

    render() {
        return (
            <div>
                <Inputs
                    nombre={this.state.nombre}
                    apellido={this.state.apellido}
                    handlChange={this.handlChange}
                    saludar={this.saludar}
                />
                <Hola
                    saludo='hola'
                    persona={this.state.saludo}
                    fin='como estas?'
                />
                <br/>
                <Counter
                    number={this.state.number} 
                    increment={this.increment}
                />
            </div>
        )
    }
}

export default Container