/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

function palavras(string){
  let separar = string.split(' ')
  let contar = separar.length

  return contar
}

console.log(palavras('Olá meu nome é Julio'))