// como declarar una clase
class Persona {
    // constructor es la funcion q se utilizara para instanciar la clase
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludo(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}...`)
    }
}

// instanciando y utilizando
const jonas = new Persona('jonas','millan',24)
jonas.saludo()

const ruben = new Persona('ruben','rubenasio',42)
ruben.apellido = 'sanch'
ruben.saludo()



class Transporte{
    constructor(tipo, anio){
        this.tipo = tipo 
        this.anio = anio           
    }
    on(){
        console.log('rumm rumm')
    }
}
// la palabra reservada extends quiere decir que existe herencia
class Auto extends Transporte{
    constructor(marca, color){
        // super se utilizar para el objeto padre
        super('auto', 1994)
        this.marca = marca
        this.color = color
    }
}

class Barco extends Transporte{
    constructor(velocidad){
        super('barco', 2019)
        this.velocidad = velocidad
    }
}

// se pueden utilizar metodos del padre debido a la herencia

const autobus = new Auto('mercedes','blanco')
console.log(autobus.tipo)
autobus.on()

const barco1 = new Barco(2)
console.log(barco1.anio)
barco1.on()