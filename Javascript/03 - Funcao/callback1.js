/*
* Callback, função chamada em cada evento
*/
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // <--Callback nesse caso aconteceu nos eventos do loop
fabricantes.forEach(fabricante => console.log(fabricante))