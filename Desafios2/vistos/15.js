/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */


function numeros(array) {
  let valor = []

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0 && i % 2 == 0){
      valor.push(array[i])
    }
  }

  return valor
}

console.log(numeros([0, 1, 2, 3, 4, 5]))