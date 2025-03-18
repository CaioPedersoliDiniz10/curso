const escola = [{
    nome: "turma M1",
    alunos: [{
        nome: "gustavo",
        nota: 8.1
    }, {
        nome: "ana",
        nota: 9.3
    }]
},
{
    nome: "turma m2",
    alunos: [{
        nome: "rebeca",
        nota: 8.3
    },
    {
        nome: "roberto",
        nota: 7.3
    }]

}

]

const getNota = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)