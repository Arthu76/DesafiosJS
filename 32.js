/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function media(vetor) {

  let soma = 0

  for(let i in vetor) {
    soma += vetor[i]
  }
  return soma / vetor.length

}

console.log(media([10, 5, 3.5]))