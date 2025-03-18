const produto = Object.preventExtensions({
    nome: "qualquer",
    preço : 1.99,
    tag : "promoçao"
})
produto.nome = "borracha"
delete produto.tag
console.log(produto)



const pessoas = {
    nome: "caio",
    idade : 29,

}
Object.seal(pessoa)

// altera , mas nao adiciona nem exclui