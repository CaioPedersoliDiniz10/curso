const fabricante = ["mercedes" , "audi", "bmw"]
function imprimir(nome, indice){
    console.log( `${indice+1}. ${nome}`)
}
fabricante.forEach(imprimir)
fabricante.forEach(fabricante =>console.log(fabricante))