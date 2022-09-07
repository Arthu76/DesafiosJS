/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let numeros = [1, 2, 3, 4, 5, 6]



let pares = [] 
for (let i in numeros) {
  if (numeros[i] %2 == 0) {
    pares.push(numeros[i])
  }
}
console.log(pares)



let impares = [] 
for (let i in numeros) {
  if (numeros[i] %2 == 1) {
    impares.push(numeros[i])
  }
}
console.log(impares)