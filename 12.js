// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n){
  let resultado = n
  for(let i = 1; i < n; i++) {
    resultado = resultado * i
  }
  return resultado
}

console.log(fatorial(3))
console.log(fatorial(4))