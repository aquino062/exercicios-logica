
var altura = 1.60
var peso = 55.00
var soma = altura * altura
var imc = peso / soma

console.log(imc.toFixed(2))

if (imc <= 18.5) {
    console.log(`Abaixo do peso.`)
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log(`Peso ideal (parabéns)`)
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Levemente acima do peso`)
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`obesidade grau I`)
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`obsidade grau II (severa)`)
} else{
    console.log(`obsidade grau III (mórbida)`)
}

