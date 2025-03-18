class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CirculoFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;

        });
        if (valorConsolidado < 0 ){
            console.log("vc ta duro")
        }

        return valorConsolidado; // Adicionamos o `return` para retornar o valor final
    }
}

// Criando instâncias de `Lancamento`
const dados = [ 
    { nome: "salario", valor: 45000 },
    { nome: "conta de luz", valor: -200 },
    { nome: "conta de agua", valor: -300 },
    { nome: "transporte", valor: -45000 }
];

const contas = new CirculoFinanceiro(6, 2024);

// Adicionando lançamentos ao CirculoFinanceiro
dados.forEach(l => {
    const lancamento = new Lancamento(l.nome, l.valor); // Corrigido o nome da variável
    contas.addLancamentos(lancamento); // Corrigido o nome da variável
});

// Exibindo o sumário
console.log(contas.sumario()); // Exibe o valor consolidado
