import React, { Component } from 'react'
import EditInput from './EditInput'

export default class Todo extends Component {

    state={
        todos:[],
        input:'',
    }

    handleChange = name => event => this.setState({[name]: event.target.value})
    
    addTodo = () => {
        const newArr = [...this.state.todos]
        newArr.push(this.state.input)
        this.setState({todos: newArr, input:''})
    }

    deleteTodo = todo => {
        const newArr = [...this.state.todos]
        newArr.splice(newArr.indexOf(todo), 1)
        this.setState({todos: newArr})
    }

    handleEdit = (index, str) => {
        const newArr = [...this.state.todos]
        newArr[index] = str
        this.setState({todos: newArr})
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.handleChange('input')}/>
                <button onClick={this.addTodo}>addTodo</button>

                <ul>
                    {
                        this.state.todos.map((todo,index) => {
                            return(
                                <li key={todo+index}> 
                                    {todo}
                                    <EditInput
                                        oldTodo={todo}
                                        handleEdit={this.handleEdit}
                                        index={index}
                                    />
                                    <button 
                                        onClick={() => this.deleteTodo(todo)}
                                    > 
                                        Done 
                                    </button>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
