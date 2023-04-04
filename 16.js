 //Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é 

//equilátero, isósceles ou escaleno.

var a = 10
var b = 10
var c = 10


if (a + b > c && b + c > a && a + c > b){
    if (a == b && b == c){
        console.log(`${a} , ${b}, ${c}. todos lados são iguais. o tringulo é equilátero.`)

    } else if (a == b || b == c || c == a){
        console.log(`${a} , ${b}, ${c}. dois lados são iguais. o triangulo é isósceles.`)

    } else if( a != b && b !=c && c != a ){
        console.log(`${a} , ${b}, ${c}. todos os lados são diferentes. o triangulo é escalano.`)

    } else {
        console.log("valor inválido")
    }
} else {
    console.log(" os valores não pode formar um triangulo")
}