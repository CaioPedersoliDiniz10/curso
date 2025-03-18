function getPreco (imposto=0, moeda = 'R$'){
    return `${moeda}  ${this.preco* (1-this.desconto) * (1+imposto)}` 
}


const produto = {
    nome : "notebook" ,
    preco: 4599,
    desconto : 0.15,
  getPreco 
}
globalThis.preco =20
globalThis.desconto =0.1
console.log(getPreco())
console.log(produto.getPreco());

const carro = {
    preco : 49999,
    desconto: 0.20

}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
