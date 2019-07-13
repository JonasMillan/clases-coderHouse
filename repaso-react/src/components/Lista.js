import React from 'react'

const Lista = ({lista}) => {
    return (
        <ul>
            {
                lista.map( (numero) => <li key={numero}> {numero} </li>)
            }
        </ul>
    )
}

export default Lista