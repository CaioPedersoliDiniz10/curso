const alunos = [
    { nome:"caio", nota: 9.8},
       {  nome:"theo", nota: 6.8 },
       {  nome:"theo", nota: 4.5 }
]

let total1 = 0
for(let i =0; i<alunos.length; i++){
    total1 += alunos[i].nota
} 
console.log(total1/alunos.length)




const getNota = aluno=>aluno.nota
const soma = (total,atual)=>total+atual

const total2=alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)