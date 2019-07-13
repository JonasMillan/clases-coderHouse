
const auth = {
    autenticado: false,
    login(cb){
        this.autenticado = true
        cb()
    },
    logout(cb){
        this.autenticado = false
        cb()
    },
    isAuthenticated(){
        return this.autenticado
    }
}
export default auth
