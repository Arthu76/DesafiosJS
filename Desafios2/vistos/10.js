/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function numero(num) {
  let simbolo = '+'
  for(i = 0; i < num; i++){
    return simbolo.repeat(num)
  }
}
 
console.log(numero(4))