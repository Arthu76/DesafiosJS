/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function soma(a, b) {
  let resultado = 0

  if(a >= 0 && b>= 0) {
    for(let i = 0; i < b; i++) {
      resultado += a
    }
  }

  return resultado

}

console.log(soma(0, 3))