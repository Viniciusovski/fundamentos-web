/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimento(altura1, altura2, taxaCrescimento){
    if(altura1 != altura2){
        if(altura1 < altura2){
            novaAltura = altura1 + taxaCrescimento
            if(novaAltura > altura2){
                console.log("A primeira criança é a menor, mas ultrapassará a segunda em altura")
            } else{
                console.log("A primeira criança é a menor, mas NÃO ultrapassará a segunda em altura")
            }
        } else {
            novaAltura = altura2 + taxaCrescimento
            if(novaAltura > altura1){
                console.log("A segunda criança é a menor, mas ultrapassará a primeira em altura")
            }else{
                console.log("A primeira criança é a menor, mas NÃO ultrapassará a segunda em altura")
            }
        }
    } else {
        console.log("As crianças têm a mesma altura")
    }
}

 //crescimento(130, 150, 30)
 crescimento(130, 150, 20)