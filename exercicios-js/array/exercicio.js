const alunos = [
    { nome: "caio", nota: [6, 5, 4, 5] },
    { nome: "theo", nota: [6, 5, 7, 5] },
    { nome: "jose", nota: [6, 7, 3, 8] }
];

// Calculando as médias individuais
const medias = alunos.map(aluno => {
    const soma = aluno.nota.reduce((acc, nota) => acc + nota, 0);
    return soma / aluno.nota.length;
});

// Encontrando a menor média usando um laço
let menorMedia = medias[0]; // Assume que a primeira média é a menor

for (let i = 1; i < medias.length; i++) {
    if (medias[i] < menorMedia) {
        menorMedia = medias[i];
    }
}

console.log("A menor média é:", menorMedia);
