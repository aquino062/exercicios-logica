
var formadepagamento = 3
 var valordoproduto = 5.0
 
 var descontoavista = valordoproduto * 0.15 
var cartãodecredito = valordoproduto * 0.10 
var parceladonocartao = valordoproduto

//1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
 if(formadepagamento == 1){
    console.log(`Valor do Produto é: ${valordoproduto.toFixed(2)} R$ , com desconto Avista ou no pix fica: ${valordoproduto - descontoavista} R$`)
    //2 - À Vista no cartão de crédito, recebe 10% de desconto
 } else if(formadepagamento === 2){
    console.log(`Valor do Produto é: ${valordoproduto.toFixed(2)} R$ , com desconto no cartão de credito fica: ${valordoproduto - cartãodecredito} R$`)
    //3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
 } else if (formadepagamento === 3){
    console.log(`Valor do Produto é: ${valordoproduto.toFixed(2)} R$ , não tem desconto.`)
    //4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
 } else if (formadepagamento === 4){
    console.log(`Valor do Produto é: ${valordoproduto.toFixed(2)} R$ , + 10% de juros fica: ${valordoproduto + cartãodecredito} R$`)
 }
 




/*
var valordoproduto = 4.50
var formadepagamento = "3"
var precofinal;

//1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
switch (formadepagamento) {
   case '1':
      precofinal = (valordoproduto * 0.85);
      break;
//2 - À Vista no cartão de crédito, recebe 10% de desconto
   case '2':
      precofinal = (valordoproduto * 0.90);
      break;
//3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
   case '3':
      precofinal = (valordoproduto);
      break;
 //4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
   case '4':
      precofinal = (valordoproduto * 1.10);
      break;

   default:
      console.log('valor invalido')
      break;
}

console.log(`Preço final é : ${precofinal.toFixed(2)} R$`)

*/