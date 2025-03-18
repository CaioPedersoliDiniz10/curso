const notas = [7.7, 6.5, 7.1, 5.2 ,6.9 ,9.0 ,2.3 ,2.5]
let notasBaixas = []
for(let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i])
    }
    
}
console.log(notasBaixas)




// CALBACK
notasbaixas2 = notas.filter(function(nota){
    return nota <= 7
})
console.log(notasbaixas2)


