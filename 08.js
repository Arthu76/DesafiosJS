/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

const pontos = '56 27 160 35 60 17 200 34'



function splitString(stringToSplit, separator) {

  var arrayOfStrings = stringToSplit.split(separator)

  var maiorPontuaçao = [0]
  let menorPontuaçao = arrayOfStrings[0]

  for (let i = 0; i < arrayOfStrings.length; i++){
    if (Number(arrayOfStrings[i]) > Number(maiorPontuaçao[maiorPontuaçao.length - 1])){
      maiorPontuaçao.push(arrayOfStrings[i])
    } else if (Number(arrayOfStrings[i]) < Number(menorPontuaçao)){
      menorPontuaçao = arrayOfStrings[i]
    }
  }

  maiorPontuaçao.shift()

  return console.log(menorPontuaçao, maiorPontuaçao)

}

splitString(pontos, ' ')






  



