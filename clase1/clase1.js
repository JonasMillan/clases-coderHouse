// ---------------------------------------------------
// strings literals 
// ---------------------------------------------------

const nombre = 'jonas'
const edad = 24
// forma de emc5 de laburar con strings 
console.log('hola soy '+nombre+' y tengo '+edad)
// manera de emc6 para laburar con strings
console.log(`hola soy ${nombre} y tengo ${edad}`)


// ---------------------------------------------------
// nuevas variables let y const
// ---------------------------------------------------

// emc 5 declaracion de variables
var nombre = 'pepe' 

// emc 6 declaracion de variables
//  const es de un solo type no se puede sobre escribir el type y siempre deberiamos de laburar con el
const arr = []
arr.push('pepe')
console.log(arr)

// let se puede sobre escribir el type se usa mayormente en loops 
let nombre = 'pepe'
nombre = 1
console.log(nombre)


// ---------------------------------------------------
//  arrow functions
// ---------------------------------------------------

// emc 5 declaracion de funciones 
function saludar(){
    return 'hola'
}

// arrow functions emc 6 
const saludar = () => {
    return 'hola'
}
const despedir = () => 'chao'

const quiero = str => console.log(str)


// ---------------------------------------------------
//  metodos array (functional programming)
// ---------------------------------------------------

const arr = [
    2,
    3,
]
// ... (spread operator) funciona para copiar un array  siempre copiamos de esta forma asi hacemos inmutable 
const newArr = [...arr]

// console.log(newArr)
// newArr[0] = 'hola'
// console.log(newArr)
// console.log(arr)

// const iterador = arr => arr.forEach(e => console.log(e))

// como retornar un  nuevo array de uno viejo 
const iterador = arr => {
    let newArr = []
    for(let index in arr){
        newArr.push(arr[index]+1)
    }
    return newArr
}
// forma correcta de generar un nuevo array y modificarlo  por medio de otro
const newArr = arr.map(e => ( e % 2 === 0) ? 'fizz' : 'buzz')
console.log(newArr)

// reduce se utilizar para cambiar estructuras de datos 
const newArr = arr.reduce((total, e)=>{
    console.log(total)
    total.push([e])
    return total
},['asd'])

// console.log(arr)
// console.log(newArr)
// const newArr = arr.filter(e => e%2 === 0)
// console.log(newArr)

// ejercicio de protos
const a = {
    i:1,
    toString(){
        return a.i++
    }
}

if(a == 1 && a == 2){
    console.log('queeeee')
}