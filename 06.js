/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicial, taxaDeJuros, tempo) {
  return capitalInicial + (capitalInicial * taxaDeJuros * tempo)
}

console.log(jurosSimples(100, 10/100, 2));
