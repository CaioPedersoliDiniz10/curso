class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai  extends Avo{
    constructor(sobrenome,proffisao = "professor"){
        super(sobrenome)
        this.proffisao = proffisao
    }
}
class Filho extends Pai{
    constructor(){
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)