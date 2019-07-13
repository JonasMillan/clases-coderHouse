import React from 'react'
import auth from '../auth'
import { Link } from 'react-router-dom'

const LandingPage = props => {
    console.log(props)
    return(
        <div>
            <h1>Landing Page</h1>
            <Link to='/pepe'>pepe</Link>
            <br/>
            <a href='/pepe'>PEPEa</a>
            <br/>
            <button onClick={
                () => {
                    auth.login(() => {
                        props.history.push('/app')
                    })
                }
            }> login </button>
        </div>
    )
}

export default LandingPage