/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

const vetorInteiro = [1, 3, 6]
const vetorString = ['Bom dia!']
const vetorDouble = [10.5, 35.3, 87.6]

const todosOsVetores = vetorInteiro.concat(vetorString, vetorDouble)
const todosOsVetores2 = vetorString.concat(vetorInteiro, vetorDouble)



console.log(todosOsVetores)
console.log(todosOsVetores2)