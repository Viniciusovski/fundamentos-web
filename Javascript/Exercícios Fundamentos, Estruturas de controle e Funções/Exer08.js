/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

let pontuacao = ['10', '20', '20', '8', '25', '3', '0', '30', '1']


function compararPontuacao(lista){
    let maior = 0
    let menor = 9999999
    let soma = 0
    for(let i in lista){
        if(lista[i] < menor){
            menor = lista[i]                        
        }        
    }

    for(i in lista){
        if(lista[i] > maior){
            maior = lista[i]
            soma++
        }
    }

    console.log("Você bateu seu recorde ", soma, " vezes")
    console.log("Você fez seu pior jogo na jogada ", lista.indexOf(menor) + 1)
    let resultado = [soma, lista.indexOf(menor) + 1]
    console.log(resultado)
    
}

compararPontuacao(pontuacao)


