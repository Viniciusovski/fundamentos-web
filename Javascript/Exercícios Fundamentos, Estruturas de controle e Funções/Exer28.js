/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
 
function parOuImpar(lista){
    let contPar = 0
    let contImpar = 0

    for(let i in lista){
        if(lista[i] % 2 == 0){
            contPar++
        } else {
            contImpar++
        }
    }

    console.log("Quantidade de pares: ", contPar)
    console.log("Quantidad de ímpares: ", contImpar)
}

const numeros = [1, 76, 98, 31, 33, 90, 132, 55]

parOuImpar(numeros)