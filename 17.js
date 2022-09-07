/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function valor(plano, salario) { 

  switch(plano) {
    case 'planoA':
      return console.log(salario + (salario * 0.10))
      break

    case 'planoB':
      return console.log(salario + (salario * 0.15))
      break

    case 'planoC':
      return console.log(salario + (salario * 0.20))
      break

    default:
      console.log('Plano inválido')
  }
}

valor('planoB', 15)

