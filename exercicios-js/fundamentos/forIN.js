const notas = [6.7 , 7.4 , 9.8 , 8.1 , 7.7]

for(i  in notas ){
    if ( notas[i] > 8){
        console.log(i, notas[i])
    }
}

const pessoa = {
    nome : "caio",
    sobrenome : "diniz",
    idade : 20,
    peso: 78
}
for (let atributo in pessoa){
    console.log(atributo + " = " + pessoa[atributo]);

}

