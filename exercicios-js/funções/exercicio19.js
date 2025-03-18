function Lanchonete(codigo = 0, quantidade =0){
    if(codigo ==100){
        console.log("cachorro quente")
        let calculo = quantidade * 3
        console.log(`o valor é de ${calculo}`)
    }
    else if(codigo == 200){
        console.log("hanburguer")
        let calculo = quantidade * 4
        console.log(`o valor é de ${calculo}`)

    }
}
Lanchonete(200,3)
