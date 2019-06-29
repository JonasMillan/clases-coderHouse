import React from 'react';

const Hola = ({ saludo, persona, fin }) => {

    return (
        <div> { `${saludo} ${persona} ${fin}` } </div>
    );
}

export default Hola;
