for(let i = 1 ; i <= 10 ; i++) {
    if (i % 2 == 0) {
        console.log(`for === ${i} x 5 = ${i * 5}`)
    }
}

const valores = [1,2,3,4,5,6,7,8,9,10]
valores.forEach((value) => {
    console.log(`.forEach === ${value} x 5 = ${value * 5}`)
})

const resultado = valores.map((value) => {
    return value * 5
})
console.log(resultado)  // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]