let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // A posição dos sinais altera a ordem da execução
console.log(num1 === num2)

/*
*Não coloque incremento em comparações
*/