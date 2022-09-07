/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais. */

function consoantes(string) {
  return string.replace(/[aeiouà-ú]/gi, '')// Regex
}

console.log(consoantes( "Macarrão" ))

/* g -> global. Busca por todas as ocorrências.
   i -> case insensitive. Não faz distinção entre maiúsculas e minúsculas. */