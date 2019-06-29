import React from 'react';

const Input = ({handlChange, nombre, apellido, saludar}) => {

    return (
        <div> 
            <input type='text' placeholder='nombre' value={nombre} onChange={handlChange('nombre')}/>
            <br/>
            <input type='text' placeholder='apellido' value={apellido} onChange={handlChange('apellido')}/>
            <br/>
            <button onClick={saludar}> saludar </button>
            <br/>
        </div>
    );
}

export default Input;