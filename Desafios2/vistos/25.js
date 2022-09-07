/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

function busca(palavra, array) {
  let palavraAux = []

  for(let i = 0; i < array.length; i++) {
    if(array[i].includes(palavra)) {
      palavraAux.push(array[i])
    }
  }

  return palavraAux
}

console.log(busca('pra', ['prato', 'arroz', 'lepra']))