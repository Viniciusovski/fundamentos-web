/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

numero = 1
pares = []
while(numero <= 101){
    if(numero % 2 == 0){
        pares.push(numero)
    }
    numero++
}

console.log(pares)