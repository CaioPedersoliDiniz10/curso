const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores.join(' '))  // Exibe os valores separados por espaço

console.log(valores.length)

valores.push({id: 5}, false, null, "text")
console.log(valores.join(' '))  // Exibe os valores separados por espaço

console.log(valores.pop())  // Remove o último valor e exibe

console.log(typeof valores)