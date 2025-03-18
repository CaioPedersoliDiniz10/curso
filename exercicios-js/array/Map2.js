const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco" : 13.90}',
   '  {"nome": "Kit de Lapis", "preco":41.22 }' ,
  ' {"nome": "Caneta", "preco" : 7.50}'
]


function paraObjeto(json){
   return JSON.parse(json)
}

function ApenasPreco(produto){
    return produto.preco

}

const resultado = carrinho.map(paraObjeto).map(ApenasPreco)
console.log(resultado)