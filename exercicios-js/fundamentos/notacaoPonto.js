console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "BOLA"


function Obj(nome){
 this.nome = nome
 this.teste = function(){
    console.log("exec")
 }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj('MESA')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.teste()