import React from 'react'

const Botones = ({sumar, restar, reset}) => {
    return (
        <div>
            <button onClick={sumar}> increment </button>
            <button onClick={sumar}> increment2 </button>
            <button onClick={restar}> decrement </button>
            <button onClick={reset}> reset </button>
        </div>
    )
}

export default Botones