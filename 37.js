/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function aritimetica(n, a1, r) {
  let an = n
  // termo geral PA
  an = a1 + (n - 1) * r

  // soma dos termos da PA
  let sn = ((a1 + an) * n) / 2

  for(let i = 0; i < n; i++) {
    let soma = a1 + (i+1 - 1) * r
    console.log('Termo ', i+1,': ', soma, 'Soma dos termos :', sn)
  }

}

function geometrica(n, a1, r) {
  let an = n
  // termo geral PG
  an = a1 * (r * (n - 1))

  // soma da PG finita
  sn = (a1 * (1 - (r * n))) / 1 - r

  for(let i = 0; i < n; i++) {
    let soma = (a1 * i) - r
    console.log('Termo ', i+1,': ', soma,'Soma dos termos :', sn)
  }
  
}

aritimetica(3, 4, 5)
geometrica(3, 4, 5)