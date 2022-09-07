/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function programa(dia) {
  switch (Math.floor(dia)) {
    case 2:
    case 3:
    case 4:
      console.log("Dia inválido")
      break

    case 5:
    case 6:
      console.log("Dia útil")
      break
    
    case 7:
    case 1:
      console.log("Fim de semana")
  }
}

programa(1)
programa(5)
programa(2)
programa(7)
