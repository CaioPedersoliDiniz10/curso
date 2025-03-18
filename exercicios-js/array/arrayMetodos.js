const pilotos = ["vettel", "massa", "hamilton", "vettel"]
pilotos.pop()
console.log(pilotos)
pilotos.push("vertappen")
pilotos.shift()
pilotos.unshift("caiopika")
console.log(pilotos)
pilotos.splice(2,0,"theoOMito", "melaoTrovoada")
console.log(pilotos)
pilotos.splice(3,2)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)