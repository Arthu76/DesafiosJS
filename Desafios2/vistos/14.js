/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

let array = []

const feira = { fruta: 'Maçã', preco: 3.50}


Object.keys(feira).forEach((item) => {

  let array2 = []
  array2.push(item)
  array2.push(feira[item])

  array.push(array2)
})

console.log(array)



