const avo = {
    atributo1 : "A"
}
const pai = {__proto__: avo,
    atributo2 : "B"
}
const filho = {
    __proto__ : pai , 
    atributo3 : "C"
}
console.log(filho.atributo1)


const Carro = {
    velAtual : 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <  this.velMax){
            this.velAtual += delta
        } 
        else {
            this.velAtual = this.velMax
        }

    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const Ferrai = {
    modelo : "F40",
    velMaxima : 324
}
const Volvo = {
    modelo: "V40",
   status (){  return `${this.modelo}:${super.status()} `
}
    
}
Object.setPrototypeOf(Ferrai , Carro)
Object.setPrototypeOf(Volvo , Carro)
Volvo.acelerarMais(100)
Ferrai.acelerarMais(150)
console.log(Ferrai.status())
console.log(Volvo.status())