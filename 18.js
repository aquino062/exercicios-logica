var francisco = 1.10
var sara = 1.50

var taxafranc = 0.03
var taxasara = 0.02

var ano = 0

while (francisco <= sara) {
    francisco += taxafranc;
    sara += taxasara;
    ano++
}

console.log(`em ${ano} anos , francisco será maior que sara.`)