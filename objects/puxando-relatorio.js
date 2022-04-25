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

let relatorio = "";

for ( let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} ===> ${cliente[info]}
        `
    }    
}

console.log(relatorio)