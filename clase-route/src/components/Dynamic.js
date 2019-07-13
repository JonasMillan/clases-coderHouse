import React from 'react'

const Dynamic = (props) => {
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default Dynamic