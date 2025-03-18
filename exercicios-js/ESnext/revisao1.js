const obj = { a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return "oi "
    }
}
console.log(pessoa.nome, pessoa.ola())


// Classe
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'AU au'
    }
}
console.log(new Cachorro().falar())