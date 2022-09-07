/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos: */

function num(array){
  let maiorNumero = array[0]
  let segundoMaior = []
  for(let i = 0; i < array.length; i++){
    if(array[i] > maiorNumero){
      segundoMaior = maiorNumero
      maiorNumero = array[i]
    }
  } 

  return segundoMaior
}

console.log(num([6, 5, 10]))