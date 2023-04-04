const aluno = "willian" 
var nota1 = 1
var nota2 = 5.2
var nota3 = 4
var nota4 = 8

var media = (nota1 + nota2 + nota3 + nota4) / 3 



if(media >= 7){
 console.log(`${aluno} Sua Média Final é: ${media.toFixed(1)} , Parábens Você foi Aprovado.`)
} else {
    console.log(`${aluno} Sua Média Final é: ${media.toFixed(1)} , Você foi Reprovado.  `)
}

