import React from 'react'
import auth from '../auth.js'
import { Link } from 'react-router-dom'

const Profile = (props) => (
    <div>
        <h1>Profile</h1>
        <Link to='/'>home</Link>
        <button onClick={
            () => {
                auth.logout(() => {
                    props.history.push('/')
                })
            }
        }>Logout</button>
    </div>
)

export default Profile