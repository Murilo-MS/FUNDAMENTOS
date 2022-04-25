const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345667899",
    email:"andre@gmail.com",
    contato:["5591235498","5521988743124"],
    saldo:100,
    dependentes: [
        {
            nome:"Sara",
            parentesco:"filha",
            dataNasc:"01/01/2000"},
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    ],
    depositar:function(valor)
    {
        this.saldo += valor
    }
};

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
