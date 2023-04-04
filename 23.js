//Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.


let valordahoraaula = 30.00  // por aula
let aulaslecionadas = 60     //no mes 
 var resfinal = valordahoraaula * 60 * 0.9

console.log(` salário liquido final : R$ ${resfinal.toFixed(2)} `)


/*
// leitura dos valores de entrada
var valorHoraAula = 30
var numAulas = 60
var percentualINSS = 10

// cálculo do salário bruto
var salarioBruto = valorHoraAula * numAulas;

// cálculo do valor do desconto do INSS
var descontoINSS = (percentualINSS / 100) * salarioBruto;

// cálculo do salário líquido
var salarioLiquido = salarioBruto - descontoINSS;

// impressão do resultado na tela
console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));*/



