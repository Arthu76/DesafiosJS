/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function num(numeros) {
  let intervalo = 0
  let foraDoIntervalo = 0

  for(let i in numeros) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
      intervalo++
    } else {
      foraDoIntervalo++
    }
  }
  return console.log(`numeros no intervalo: ${intervalo}, numeros fora do intervalo: ${foraDoIntervalo}`)
}


num([5, 16, 13, 7, 10, 20, 32])
