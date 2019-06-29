import React, { Component } from 'react'



class FetchContainer extends Component {

    state = {
        num: 0
    }

    componentWillMount(){
        console.log('will mount DEPRECADO')
    }
    componentDidMount(){
        console.log('did mount')
    }
    componentWillReceiveProps(nextProps){
        console.log('will recive props DEPRECADO ',nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextState, nextProps)
        return true
    }
    componentDidUpdate(){
        console.log('updated!!!');
    }
    componentWillUnmount(){
        console.log('chau')
    }
    sumar = () => {
        this.setState({num: this.state.num + 1})
    }
    render () {
        console.log('render!');
        return (
            <div>
                {this.state.num}
                <button onClick={this.sumar}>sumar</button>
            </div>
        )
    }
}

export default FetchContainer