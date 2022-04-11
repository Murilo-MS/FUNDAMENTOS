const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345667899",
    email:"andre@gmail.com",
    contato:["5591235498","5521988743124"],
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"01/01/2000"
    }]

};

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);
