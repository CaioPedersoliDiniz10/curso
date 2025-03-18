const produto = new Object
produto.nome = "Cadeira"
produto.preco = 220
delete produto.preco



const carro ={ 
    modelo : "A4",
    valor: 89000,
    proprietario : {
        nome: "caio",
        idade: 20,
        endereco :{
            rua : "RUA ABC",
            numero : 123
        }
    },
    condutores: [ {
        nome: "theo",
        idade: 50 
    },
{
    nome: "hgn", 
    idade : 20
}]
}
console.log(carro.condutores.length)

