/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

function a(elemento) {
  array = []

  for(let i = 0; i < elemento.length; i++) {
    if(typeof elemento[i] === 'number'){
      array.push(elemento[i])
    }
  }
  return console.log(array)
}

a([1, '2', 'três', 4])

