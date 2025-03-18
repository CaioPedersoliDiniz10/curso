function Carro(velocidadeM = 200, delta =5){
    let velocidadeInicial =0

    this.acelerar = function (){
        if(velocidadeInicial< velocidadeM){
            velocidadeInicial = velocidadeInicial +delta
        }
        else{
            velocidadeInicial = velocidadeM
        }
    }
    this.VelocidadeAtual = function(){
        return velocidadeInicial
    }
}

const uno = new Carro;
const Ferrari = new Carro(400,35)
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()


console.log(uno.VelocidadeAtual())
console.log(Ferrari.VelocidadeAtual())

