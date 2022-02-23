/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const ehDivisivel = (num) =>{
    return num % 3 == 0 ? true : false
}

console.log(ehDivisivel(9))
console.log(ehDivisivel(10))