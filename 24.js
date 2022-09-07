/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function getMessage () {
  let number = 1
  while (number < 12) {
    console.log(number, ' - Hello World!')
    number++
  }
}

getMessage()