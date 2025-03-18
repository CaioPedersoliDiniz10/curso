Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // Corrigido aqui
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const produtos = [
    { nome: "notbook", preco: 2499, fragil: true },
    { nome: "Ipad", preco: 4199, fragil: true },
    { nome: "Copa de vidro", preco: 12.99, fragil: true },
    { nome: "Copa de plastico", preco: 18.99, fragil: false }
];

// Funções de filtro
const caro = produto => produto.preco >= 2500;
const fragil = produto => produto.fragil;

// Usando filter2
console.log(produtos.filter2(caro).filter2(fragil));
