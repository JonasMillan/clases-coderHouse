import React from 'react'
import auth from '../auth.js'

const Profile = (props) => (
    <div>
        <h1>Profile</h1>
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