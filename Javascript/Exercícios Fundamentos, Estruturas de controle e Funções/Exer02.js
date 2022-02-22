/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const ehTriangulo = function (lado1, lado2, lado3) {
    if ((lado2 + lado3 > lado1)
        && (lado1 + lado3 > lado2)
        && (lado2 + lado1 > lado3)) {
        return true
    } else {
        return false
    }
}

//console.log(ehTriangulo(20, 16, 30)) --> retorna true

function classificacao(l1, l2, l3) {
    if (ehTriangulo(l1, l2, l3)) {
        if (l1 != l2 && l1 != l3 && l2 != l3) {
            console.log("Escaleno")
        } else if (l1 == l2 && l1 == l3 && l2 == l3) {
            console.log("Equilátero")
        } else {
            console.log("Isósceles")
        }
    } else {
        console.log("Não é um triangulo")
    }
}

classificacao(20, 16, 30)
classificacao(20, 20, 30)
classificacao(40, 40, 40)