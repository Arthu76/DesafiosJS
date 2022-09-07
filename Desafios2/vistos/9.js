/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

let somar = numeros => {
  let soma = numeros.reduce(function(repetira, numero){
    return repetira.repeat(numero)
  })

  return soma
}

console.log(somar(["código ", 2]))
