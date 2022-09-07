/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */

let alunos = {
   Roberta: [2.5, 5.7, 3],
   Mauro: [7, 8.9, 7.3],
   Luiza: [3.9, 5, 5.2]
}
 
function escola(obj){
  let media = []
  let nome = []
  let maiorNota = 0
  let indice = 0

  for(let i in obj){
    let somar = 0
    nome.push(i)
    for(let a = 0; a < obj[i].length; a++) {
      somar += obj[i][a]
    }
    media.push(somar / obj[i].length)
  }
  
  for(let i = 0; i < media.length; i++){
    if(media[i] > maiorNota){
      maiorNota = media[i]
      indice = i
    }
  }

  let alunoM = new Object()

  alunoM[nome[indice]] = maiorNota

  console.log(alunoM)
}

escola(alunos)

