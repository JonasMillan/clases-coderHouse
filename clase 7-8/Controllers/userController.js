const User = require('../Models/Users.js')


const findUserById = (req, res) => {
    res.json({response: 'hola'})
}

const register = async (req, res) => {
    const { username, mail, password } = req.body
    const usuario = await User.create({ username, mail, password})
    res.json({response: usuario})
}

const login = async (req, res) => {
    const { mail, password } = req.body
    let usuario = await User.findOne({ where: { mail }})
    if(usuario !== null){
        usuario = usuario.dataValues
        if(usuario.password === password){
            res.status(200).json({result: usuario})
        }
    }else{
        res.status(404).json({error: 'not found'})    
    }
}

module.exports = {
    findUserById,
    register,
    login
}