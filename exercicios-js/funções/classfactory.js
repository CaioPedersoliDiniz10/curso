class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Jõao')
console.log(p1.falar())


const pessoa = nome=>{
    return{
        falar : ()=> console.log(`meu nome é ${nome}`)
    }

}
p2 = pessoa("caio")
p2.falar()