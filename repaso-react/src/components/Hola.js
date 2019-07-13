import React from 'react'

const Hola = ({mensaje, nombre}) => {
    return (
        <div>
            <h1>
                {mensaje+' '+nombre}
            </h1>
        </div>
    )
}

export default Hola