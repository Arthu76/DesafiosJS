/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */

function triangulo(base, altura){
  const calculo = base * altura / 2

  return calculo.toFixed(2)
}

console.log(triangulo(10.32, 15.46))