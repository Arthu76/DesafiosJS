/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */
function num(array, numero){

  let separar = []
  
  for(let i = 0; i < array.length; i++){
    let string = array[i].toString()
    if(string.length == numero){
      separar.push(array[i])
      
    }
  }
 console.log(separar) 
}

num([13, 156, 67, 249], 3)
num([89, 340, 40, 12], 2)
num([5, 34, 27, 09], 1)