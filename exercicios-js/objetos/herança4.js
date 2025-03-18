function Meuobjeto (){}
    console.log(Meuobjeto.prototype)

    const obj1 = new Meuobjeto
    const obj2 = new Meuobjeto

    Meuobjeto.prototype.nome = "CAIO"
    Meuobjeto.prototype.falar = function(){
        console.log(`bom dia meu nome é ${this.nome}!`)
    }
obj1.falar()


