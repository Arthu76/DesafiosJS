/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const valorDoPlano = 100 

function programa(idade) {
  if (idade < 10) {
    console.log('Crianças com menos de 10 anos pagam: R$' + (valorDoPlano + 80) )
  } else if (idade >= 10 && idade <= 30) {
    console.log('Conveniados com idade entre 10 e 30 anos pagam R$' + (valorDoPlano + 50))
  } else if (idade > 30 && idade <= 60) {
    console.log('conveniados com idade acima de 30 e até 60 anos pagam R$' + (valorDoPlano + 95))
  } else if (idade > 60) {
    console.log('conveniados acima de 60 anos pagam R$' + (valorDoPlano + 130))
  }
  return console.log(`idade : ${idade}`)
}

programa(8)
programa(35)
programa(23)
programa(67)