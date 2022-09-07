/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function vetores(vetor1, vetor2) {

  if(vetor1.length == vetor2.length) {
    [vetor1, vetor2] = [vetor2, vetor1]

    // for(let i = 0; i < vetor1.length; i++) {
    //   vetor1[i] = vetor1[i] + vetor2[i]
    //   vetor2[i] = vetor1[i] - vetor2[i] 
    //   vetor1[i] = vetor1[i] - vetor2[i] 

    // }
  }
  console.log(vetor1, vetor2)

}

vetores([1, 2, 3],[4, 5, 6])