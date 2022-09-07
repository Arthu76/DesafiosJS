/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function nota(nota1, nota2, nota3) {
  let notaMaior = 0
  let notaA = 0
  let notaB = 0
  

  if(nota1 > nota2 && nota1 > nota3){
    notaMaior = nota1
    notaA = nota2
    notaB = nota3
  } else if(nota2 > nota1 && nota2 > nota3) {
    notaMaior = nota2
    notaA = nota1
    notaB = nota3
  } else if(nota3 > nota1 && nota3 > nota2) {
    notaMaior = nota3
    notaA = nota1
    notaB = nota2
  }

  let mediaPonderada = ((notaMaior * 4) + (notaA * 3) + (notaB * 3)) / (4 + 3 + 3)

  if (mediaPonderada >= 5) {
    console.log('Aprovado coma nota: ', mediaPonderada
    )
  } else {
    console.log('Reprovado com a nota: ', mediaPonderada)
  }

  
}

nota(7, 8, 9)
nota(4, 6, 7)

// Math.max
