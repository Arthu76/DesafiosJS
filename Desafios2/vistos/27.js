/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir: */

function inverso(obj){
  for(let i in obj){
    console.log(`${obj[i]}: ${i}`)
  }
}

inverso({
  objeto1: 1,
  objeto2: 2,
  objeto3: 3,
  objeto4: 4,
})