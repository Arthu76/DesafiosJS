/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/
function valor(a = 0, b = 100) {
  let impares = []
  let inicio = 0
  let fim = 0

  if(a < b) {
    inicio = a
    fim = b
  } else {
    inicio = b
    fim = a
  }


  while (inicio < fim) {
    if(inicio % 2 == 1) {
      impares.push(inicio) 
    }
    inicio++
  }

  return console.log(impares)
}

valor(15, 1)