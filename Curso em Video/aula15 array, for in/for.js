/*
let num = [2,4,5,7,9,10]
for(pos = 0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

// Só funciona para array e objetos
let num = [2,4,5,7,9,10]
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}