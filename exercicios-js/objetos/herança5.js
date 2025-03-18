String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log("ola todo mundo".reverse())


Array.prototype.fisrt = function(){
    return this[0]
}
console.log([1,2,3,4,5].fisrt())