/* Criar uma função que receba um array de números e retorne o menor número desse array. */

function numeros(array) {
  let menorNumero = array[0]

  for(let i = 0; i < array.length; i++){
    if(array[i] < menorNumero){
      menorNumero = array[i]
    }
  }

  return menorNumero
}

console.log(numeros([8, 3, 1.5, 7]))
