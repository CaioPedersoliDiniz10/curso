const aprovados = ["atila", "aldo", "daniel", "raquel"]

aprovados.forEach(function(nome,indice, array){
    console.log(`${indice+1} ${nome}`)
    console.log(array)
})

const exibirArpovado = aprovados => console.log(aprovados)
aprovados.forEach(exibirArpovado)