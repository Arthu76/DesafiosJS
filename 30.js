/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function algoritmo(vetor) {
  let maiorNumero = vetor[0]
  let menorNumero = vetor[0]

  for(let i = 0; i < vetor.length; i++) {
    if (maiorNumero === undefined || vetor[i] > maiorNumero) {
      maiorNumero = vetor[i]
    } 
    if (menorNumero === undefined || vetor[i] < menorNumero){
      menorNumero = vetor[i]
    }
  }
  return console.log(menorNumero, maiorNumero)
}

algoritmo([5, 4, 6, 3])