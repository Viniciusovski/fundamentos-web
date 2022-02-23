/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function concessionaria(produto){
    switch (produto) {
        case "hatch":
            resposta = "Compra efetuada com sucesso"            
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            resposta = "Tem certeza que não prefere este modelo?"
            break;    
        default:
            resposta = "Não trabalhamos com este tipo de automóvel aqui"
            break;
    }
    return resposta
}

console.log(concessionaria("hatch"))
console.log(concessionaria("sedan"))
console.log(concessionaria("caminhonete"))
console.log(concessionaria("ferrari"))
