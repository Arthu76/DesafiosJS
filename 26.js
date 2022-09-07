/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */
function programa() {
  for (let number = 1; number <= 100; number++) {
    if (number%2 == 0) {
      console.log(number)
    }
  }
}

programa()