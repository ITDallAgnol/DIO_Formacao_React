// condicional if idade
const idade = 36
if (idade > 18) {
    console.log("Maior que 18")
}else{
    console.log("Menor de idade")
}

// condicional if nota
const nota = 9
if (nota > 7) {
    console.log("Acima da média")
}else if(nota > 5 && nota <= 7) {
    console.log("Nota esta na média")
}else{
    console.log("Abaixo da média")
}

// condicional switch nota
const nota2 = 8
switch (nota2) {
    case nota2 > 7:
        console.log('| Esta acima da média')
        break;
    case nota2 > 5 && nota < 7:
        console.log("| Esta na média")
        break;
    case nota2 < 5:
        console.log("| Abaixo da média")
    default:
        break;
}

// condicional ternário
const valor = 9
valor > 5 ? console.log("Valor acima da média") : console.log("Valor abaixo da média")