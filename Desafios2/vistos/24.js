/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function frase(caractere, string) {

  let contador = 0

  separar = string.split('')

  for(let i = 0; i < separar.length; i++){
    if(separar[i] == caractere){
      contador = contador + 1
    }
  }

  return contador
}

console.log(frase('a', 'avabava'))


