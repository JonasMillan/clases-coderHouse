const fs = require('fs')
const funciones = require('./otrasFunciones').aToX
// manera sincronica 
// const file = fs.readFileSync('holaMundo.txt');


// maneria async
// const fileAsync = fs.readFile('holaMundo.txt',(err, data) => {
//     if (err) throw err
//     const stringData = data.toString() 
//     console.log(funciones)
//     const newString = funciones(stringData)
//     console.log(newString)
// })


const persona = {
    nombre: 'pepe',
    edad: 42,
    hijos: {
        nombreHijo: 'pepito',
        edadHijo:'12'
    }
}

const saludo = ({nombre, edad, hijos: { nombreHijo, edadHijo}}, primo ="primito") => {
    console.log(nombre, edad, nombreHijo, edadHijo, primo)
}

// const saludo = (persona) => {
//     const {nombre, edad} = persona
//     console.log(nombre, edad)
// }

saludo(persona)