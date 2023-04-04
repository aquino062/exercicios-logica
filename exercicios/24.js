/*Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.



Fórmula: distância = tempo x velocidade.

       litros usados = distância / 12. 
       */


var tempodeviagem = 4 //Digite a distância percorrida (em km)

var velocidade = 120 //Digite a velocidade média (em km/h

var distancia = tempodeviagem * velocidade

var litrosusados = distancia  / 12

console.log(`Será uma viagem de ${distancia.toFixed(2)}km ,  total de combustivel gasto = ${litrosusados.toFixed(2)}L.`)

