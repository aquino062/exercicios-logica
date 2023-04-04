//13 - Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 


const nome = "willian"
const idade = 24

if(idade >=1 && idade <= 17){
    console.log(`${nome} Você tem ${idade} anos, menor de idade.`)

} else if(idade >=18){
    console.log(`${nome} Você tem ${idade} anos, maior da idade. `)
} else{
    console.log("idade inválida.")
}