//stack comun
console.log('hola')
console.log('como')
console.log('estas?')

const nombre = () => 'pepe'
const saludo = () => {
    console.log('holaaa '+ nombre())
}
saludo()

// event loop
console.log('hola')
setTimeout(() => console.log('como'),0)
console.log('estas?')