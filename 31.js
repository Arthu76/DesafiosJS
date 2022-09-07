/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function algoritmo(vetor) {
  let negativos = 0
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      negativos++
    }
  }
  return negativos
}

vetor = [4, -8, 3, 6, -6, 0, -2, 8, -7]

console.log(algoritmo(vetor))
