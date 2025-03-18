Array.prototype.reduce2 =function(callback){
let acumulador = this[0]
for(let i=1; i<this.length; i++){
    acumulador = callback(acumulador,this[i], i, this)
}
return acumulador
}




const alunos = [
    {nome: "JOAO", nota:7.3, bolsista: false},
    {nome: "maria", nota:9.2, bolsista: true},
    {nome: "pedro", nota: 9.8, bolsista: false},
    {nome: "ana", nota:8.7, bolsista: true}
]

const bolsistas = alunos.map(p =>p.bolsista).reduce2(function(acumulador,atual){
let resultado = acumulador && atual
    return  resultado 
} )
console.log(bolsistas)

const bolsistas2 = alunos.map(p =>p.bolsista).reduce2(function(acumulador,atual){
    let resultado = acumulador || atual
        return  resultado 
    } )
    console.log(bolsistas2)