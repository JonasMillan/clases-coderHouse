import React, { Component, Fragment } from 'react'

class EditInput extends Component {
    state={
        toggle: false,
        newTodo: ''
    }
    componentDidMount(){
        this.setState({newTodo: this.props.oldTodo},() => console.log(this.state.newTodo))
    }
    toggle = () =>  this.setState({toggle: !this.state.toggle})

    handleChange = name => event => this.setState({[name]: event.target.value}, () => console.log(this.state.newTodo))

    render () {
        return (
            <Fragment>
                <button onClick={this.toggle}>Editar!</button>
                {
                    (this.state.toggle) ?
                    <div>
                        <input
                            value={this.state.newTodo}
                            type='text'
                            onChange={this.handleChange('newTodo')}
                        />
                        <button onClick={() => this.props.handleEdit(this.props.index, this.state.newTodo)}>listo</button>
                    </div>
                    : ''
                }
            </Fragment>
        )
    }
}

export default EditInput