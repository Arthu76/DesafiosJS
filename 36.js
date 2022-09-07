/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function valorN(vetor, n) {

  let vetor1 = []

  for(let i in vetor) {
    vetor1.push(vetor[i] * n)
  }
  
  return vetor1
}

console.log(valorN([5, 16, 32.67], 8))

//-----------------------------------------------------------------------------------------------------

function valorA(vetor, n) {

  let vetor2 = []

  for(let i in vetor) {
    if(vetor[i] > 5) {
      vetor2.push(vetor[i] * n)
    }
  }
  
  return vetor2
}

console.log(valorA([1, 2, 3], 6))