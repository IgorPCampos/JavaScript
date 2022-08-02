//Verbo + substantivo
// let corSite = 'azul'
//   function resetaCor(){
//       corSite = ''
//   }
//  console.log(corSite)
//   resetaCor()
//   console.log(corSite)


let corSite = 'azul'
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade
}

console.log(corSite)
resetaCor("vermelho"," claro")
console.log(corSite)