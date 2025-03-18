Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) { // Corrigido o for
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

function paraObjeto(json) {
    return JSON.parse(json);
}

function ApenasPreco(produto) {
    return produto.preco;
}

const resultado = carrinho.map2(paraObjeto).map2(ApenasPreco);
console.log(resultado); // Saída: [3.45, 13.9, 41.22, 7.5]
