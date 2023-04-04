// Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

var valor1 = 6022
var valor2 = 232
var valor3 = 300

//valor 1 é o maior.
if (valor1 > valor2 && valor1 > valor3)
    if (valor2 > valor3) {
        console.log(`${valor1} , ${valor2} , ${valor3}`)
    } else {
        console.log(`${valor1} , ${valor3} , ${valor2}`)
    }

// valor 2 é o maior
 if (valor2 > valor1 && valor2 > valor3)
    if (valor1 > valor3)
        console.log(`${valor2} , ${valor1} , ${valor3}`)
    else {
        console.log(`${valor2} , ${valor3} , ${valor1}`)
    }

//valor 3 é o maior
if (valor3 > valor2 && valor3 > valor1) {
    if (valor2 > valor1) {
        console.log(`${valor3} , ${valor2} , ${valor1}`)
    } else console.log(`${valor3} , ${valor1} , ${valor2}`)

}