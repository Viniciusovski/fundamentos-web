// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

const multiplica = (a, b) => console.log(a * b)

multiplica(2,8)

const adicionarSalario = () => {
    imprimir2('O seu salario é: ' + soma(200, 100))
}

adicionarSalario()