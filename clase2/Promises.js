// require('isomorphic-fetch');

const saludo = respuesta => {
    console.log(`hola ${respuesta} estas?`)
}
// declaracion de una Promise
const prom = new Promise(( resolve, reject ) => {
        setTimeout(() => {
            // if(error) reject('ERROR')
            resolve('como') 
        },5000)
})
console.log(prom)
// como se utilizaria una promesa
prom.then(respuesta => saludo(respuesta))
// .catch(error => console.log(error))

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve(['hola','como','estas','?'])
//     },1000)
// })

// p2.then(arr => arr.forEach(string => console.log(string)))

// ejemplo de fech no funcional sin node copiar y pegar en buscador

// const url = 'https://klassi-proto.herokuapp.com/api/users'
// fetch(url)
// .then(response => response.json())
// .then(json => {
//     const usuarios = json.result
//     // const usuario = usuarios.filter(e => e.id === '1')
//     // console.log(usuario)
//     // const materias = usuario[0].materias
//     // console.log(materias)
//     const nombres = usuarios.map(usuario => usuario.nombre)
//     console.log(nombres)
// })

// promise resolver retorna un objeto promesa al cual le podemos utilizar el then o el catch
// const promesas = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ]

// const promesas = [
//     fetch('https://klassi-proto.herokuapp.com/api/users/1'),
//     fetch('https://klassi-proto.herokuapp.com/api/users/3'),
//     fetch('https://klassi-proto.herokuapp.com/api/users/2')
// ]


// promise.all funciona para iterar sobre un array de objetos promesas y tenerlos todos al mismo tiempo
// Promise.all(promesas)
// .then(values => {
//     const users = values.map(user => user.json())
//     users[0].then(resp => console.log(resp))
//     users[1].then(resp => console.log(resp))
//     users[2].then(resp => console.log(resp))

// })
