const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345667899",
    email:"andre@gmail.com"
}
const chaves = ["nome", "idade","cpf","email"]

console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))