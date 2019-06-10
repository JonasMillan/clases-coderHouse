const saludo = () => console.log('hola chicos estamos en node.js')


const aToX = stringData => {
    let newString = ''
    for (const key in stringData) {
        let char = stringData[key] 
        if(char === 'a'){
            char = 'x'
        }
        newString = newString + char        
    }
    return newString
}

module.exports = {
    saludo,
    aToX
}