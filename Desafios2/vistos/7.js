/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */
function n(numero, minimo, maximo, inclusivo = false) {
  if(inclusivo){
    if(numero >= minimo && numero <= maximo){
      return true
    } else {
      return false
    }
  } else {
    if(numero > minimo && numero < maximo){
      return true
    } else {
      return false
    }
  }

}

console.log(n(7, 1, 7))
console.log(n(7, 1, 7, true))
console.log(n(8, 1, 7, false))