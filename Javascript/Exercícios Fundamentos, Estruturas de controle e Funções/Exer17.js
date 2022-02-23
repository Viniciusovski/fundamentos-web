/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoDeSalario(plano, salario){
    switch (plano.toUpperCase()) {
        case "A":
            console.log("O seu salario agora é ", 1.1 * salario, " (10% de aumento)")           
            break;
        case "B":
            console.log("O seu salario agora é ", 1.15 * salario, " (15% de aumento)") 
            break;
        case "C":
            console.log("O seu salario agora é ", 1.2 * salario, " (20% de aumento)")
            break;   
        default:
            console.log("Plano Inválido")
            break;
    }
}

aumentoDeSalario("a", 500)
aumentoDeSalario("b", 500)
aumentoDeSalario("C", 500)