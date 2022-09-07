/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...*/

function inverso(valor) {
  if(valor == true){
    return valor = false

  } else if(valor == false) {
    return valor = true

  }   else if (valor >= 0) {
    return valor = `-${valor}`

  } else if(valor < 0) {
    return valor - valor - valor

  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`
  }



}

console.log(inverso(false))
console.log(inverso(-6))
console.log(inverso(true))
console.log(inverso(7))
console.log(inverso('Olá'))