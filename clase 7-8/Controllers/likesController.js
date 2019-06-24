
const getUserLikes = (req, res) => {
    res.json({response: 'mostrar los likes del usuario'})
}

const setUserLikes = (req, res) => {
    res.json({response: 'enviar likes del usuario'})
}

module.exports = {
    getUserLikes,
    setUserLikes
}