const produto = [
    {nome: "notbook", preco: 2499, fragil : true},
    {nome: "Ipad", preco: 4199, fragil : true},
    {nome: "Copa de vidro", preco: 12.99, fragil : true},
    {nome: "Copa de plastico", preco: 18.99, fragil : false}
]



const caro =  function (produto){
     return produto.preco >=500
}
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

