/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


function string(a, b) {
  let string1 = a.toLowerCase()
  let string2 = b.toLowerCase()
  
  if(string2.includes(string1) || string1.includes(string2)) {
    return console.log(true, string1, string2)
  } else {
    return console.log(false)
  }
  
  

} 

string('ArMaRiO', 'rio')