/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/


function mediaPonderada(codigoAluno, nota1, nota2, nota3){
    let soma = 0
    let media = 0
    if(nota1 > nota2 && nota1 > nota3){
        soma = (nota1 * 4) + (nota2 * 3) + (nota3 * 3)
    }else if(nota2 > nota1 && nota2 > nota3){
        soma = (nota2 * 4) + (nota1 * 3) + (nota3 * 3)       
    }else{
        soma = (nota3* 4) + (nota1 * 3) + (nota2 * 3) 
    }

    media = soma / 10
    
    if(media >= 5){
        console.log(`Aluno ${codigoAluno} está com as seguites notas: ${nota1}, ${nota2}, ${nota3}.`)
        console.log("Média: ", media)
        console.log("APROVADO")
    }else{
        console.log(`Aluno ${codigoAluno} está com as seguites notas: ${nota1}, ${nota2}, ${nota3}.`)
        console.log("Média: ", media)
        console.log("REPROVADO")
    }
    
}

mediaPonderada(100, 10, 7, 8)
mediaPonderada(101, 5, 3, 4)
mediaPonderada(102, 7, 7, 8)