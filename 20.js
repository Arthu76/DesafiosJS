/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function nota(valor) {
  let auxValor = valor;
  let valores = [0, 0, 0, 0, 0];

  while (auxValor >= 1) {
    if (auxValor >= 100) {
      valores[0]++; auxValor = auxValor - 100;

    } else if (auxValor >= 50) {
      valores[1]++; auxValor = auxValor - 50;

    } else if (auxValor >= 10) {
      valores[2]++; auxValor = auxValor - 10;

    } else if (auxValor >= 5) {
      valores[3]++; auxValor = auxValor - 5;

    } else if (auxValor >= 1) {
      valores[4]++; auxValor = auxValor - 1;

    }
  }

  

  if(valores[0] > 0) {
    console.log(valores[0], 'Notas de 100.')
  }
  if(valores[1] > 0) {
    console.log(valores[1], 'Notas de 50.')
  }
  if(valores[2] > 0) {
    console.log(valores[2], 'Notas de 10.') 
  }
  if(valores[3] > 0) {
    console.log(valores[3], 'Notas de 5.')
  }
  if(valores[4] > 0) {
    console.log(valores[4], 'Notas de 1.')
  }

  return null;
}

nota(376);
