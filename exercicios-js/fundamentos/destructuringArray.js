const [a] = [10]
console.log(a)
const [n1, ,n3, ,n5,n6=0]= [10,9,7]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8],[9, 6, 8]] // não é utilizado
console.log(nota)