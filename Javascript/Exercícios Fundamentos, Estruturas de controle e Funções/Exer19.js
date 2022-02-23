/*
19) O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function caixa(codigo, quantidade) {
  switch (codigo) {
    case 100:
      console.log("Cachorro Quente");
      console.log("Preço: ", quantidade * 3);
      break;
    case 200:
      console.log("Hambúrguer Simples");
      console.log("Preço: ", quantidade * 4);
    case 300:
      console.log("Cheeseburguer");
      console.log("Preço: ", quantidade * 5.5);
    case 400:
      console.log("Bauru");
      console.log("Preço: ", quantidade * 7.5);
    case 500:
      console.log("Refrigerante");
      console.log("Preço: ", quantidade * 3.5);
    case 600:
      console.log("Suco");
      console.log("Preço: ", quantidade * 2.8);

    default:
        console.log("Produto não existe")
      break;
  }
}

caixa(100, 6)
caixa(300, 5)
caixa(800, 3)
