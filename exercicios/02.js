var numero = 42
var imparoupar;
var positivoOuNegativo;



if (numero % 2 === 0){
    imparoupar = "par"
}else{
    imparoupar="impar"
}

if (numero < 0 ){
    positivoOuNegativo = "negativo"

} else{
    positivoOuNegativo = " positivo"
}
console.log(`O Número ${numero} é ${imparoupar} e ele é ${positivoOuNegativo} `)
    


