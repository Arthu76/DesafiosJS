/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
 
let somar = numeros => {
  let soma = numeros.reduce(function(numero, i){
    return numero + i
  })

  return soma

}


console.log(somar([1, 2, 3, 6]))



