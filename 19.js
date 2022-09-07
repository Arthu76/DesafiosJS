/* 19) O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function cardapio(codigo, quantidade) {

  switch(codigo) {
    case 100:
      return console.log(quantidade, "Cahcorro(s) Quente(s), Valor: ", quantidade * 3.00)
    case 200:
      return console.log(quantidade, "Hamburguer(es) Simples, Valor: ", quantidade * 4.00)
    case 300:
      return console.log(quantidade, "Cheeseburguer(es), Valor: ", quantidade * 5.50)
    case 400:
      return console.log(quantidade, "Bauru(s), Valor: ", quantidade * 7.50)
    case 500:
      return console.log(quantidade, "Refrigerante(s), Valor: ", quantidade * 3.50)
    case 600:
      return console.log(quantidade, "Suco(s), Valor: ", quantidade * 2.80)
    default:
      return console.log('Produto não existente')
  }

  
}

cardapio(100, 5)
cardapio(400, 3)
cardapio(700, 8)

