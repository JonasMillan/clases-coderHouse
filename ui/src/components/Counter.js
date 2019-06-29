import React from 'react'

const componentName = ({number, increment}) => {
    return (
        <div>
            <p> {number} </p>
            <button onClick={increment} > increment </button>
        </div>
    )
}

export default componentName