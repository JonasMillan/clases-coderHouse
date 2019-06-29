import React from 'react';

const Lista = ({ lista }) => {
console.log(lista)
    return (
        <ul>
            {
                lista.map(({nombre, id}) => <li key={id}>{ nombre }</li>)
            }
        </ul>
    );
}

export default Lista;
