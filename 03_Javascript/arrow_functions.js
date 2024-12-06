function subtrair(n1, n2) {
    return n1 - n2
}

function somar(n1, n2) {
    return n1 + n2
}

const resultado = somar(10, 5)
const resultado2 = subtrair(10, 5)

console.log(`resultado = ${resultado}`)
console.log(`resultado2 = ${resultado2}`)

// Arrow functions
const subtrair = (n1, n2) => n1 - n2
const somar = (n1, n2) => n1 + n2
    