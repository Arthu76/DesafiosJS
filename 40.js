/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */
function numeros(vetor) {
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] >= 0 && vetor[i] < 5) {
      console.log('Conceito D: ', vetor[i])
    } else if(vetor[i] >= 5 && vetor[i] < 7) {
      console.log('Conceito C: ', vetor[i])
    } else if(vetor[i] >= 7 && vetor[i] < 9) {
      console.log('Conceito B: ', vetor[i])
    } else if(vetor[i] >= 9 && vetor[i] <10) {
      console.log('Conceito A: ', vetor[i])
    }
  }
  return 

}

numeros([3.4, 5.6, 7.7])