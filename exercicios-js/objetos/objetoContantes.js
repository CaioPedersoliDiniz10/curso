const pessoa = {
    nome : "joao"
}
pessoa.nome = "pedro"
console.log(pessoa.nome)




Object.freeze(pessoa) // congelando o objeto, nao tem como alterar mais