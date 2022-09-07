/* Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo
array: */

const array = [1, 2, 4]

function retorno(a) {

  let primeiro = a.shift()
  let ultimo = a.pop()

  return [primeiro, ultimo]

}

const resultado = retorno(array)

console.log(resultado)