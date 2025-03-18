const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}



const grupoA = ['joao', 'Pedro', 'Gloria']
const GrupoFinal = [ 'Maria', ...grupoA, 'Rafaela']
console.log(GrupoFinal)