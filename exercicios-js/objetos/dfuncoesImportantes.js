const pessoa = {
    nome : "caio",
    idade : 19,
    peso: 76
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : true,
    writable: false,
    value : "01/01/2023"
})
pessoa.dataNascimento = "01/01/2019"
console.log(pessoa.dataNascimento)



const dest = {
    a:3
}
const o1 = {
    b:2
}
const o2 = {
    c:3,
    a:4

}
const obj = Object.assign(dest,o1,o2)
console.log(obj)