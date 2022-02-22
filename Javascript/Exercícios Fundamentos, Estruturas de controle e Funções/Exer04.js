/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/


function divisao(num1, num2){
    console.log("Divisão: ", num1 > num2 ? num1 / num2 : num2 / num1)
    console.log("Resto da divisão: ", num1 > num2 ? num1 % num2 : num2 % num1)
}

divisao(20, 10)
divisao(30, 100)

function divisao2(dividendo, divisor){
    console.log("Divisão 2: ", dividendo / divisor)
    console.log("Resto 2: ", dividendo % divisor)
}

divisao2(20, 10)
divisao2(30, 100)