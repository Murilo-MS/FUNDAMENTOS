const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345667899",
    email:"andre@gmail.com",
    contato:["5591235498","5521988743124"]
}

cliente.dependetes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"01/01/2000",
}

console.log(cliente);

cliente.dependetes.nome = "Sara Silva";

console.log(cliente);