/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */

function media(valor) {
  resultado = 0
  for(let i = 0; i < valor.length; i++) {
    resultado += valor[i] / valor.length
  }

  return resultado
}

console.log(media([4, 1, 10]))