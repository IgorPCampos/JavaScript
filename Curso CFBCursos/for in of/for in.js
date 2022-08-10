/*
const aluno={nome:'Bruno',sobrenome:'Silva'}
const notas={n1:80,n2:75,n3:92,n4:85}
const info={...aluno,...notas}
for(var dado in info){
    //console.log(dado)
    //console.log(aluno[dado])
    console.log(info[dado])
}
*/

let notas =[70,45,3,20,54,60]

for(let n in notas){
    console.log(n)
}
for(let n of notas){
    console.log(n)
}

let aprovados=0
let reprovados=0
for(let n of notas){
    n>=60?aprovados++:reprovados++
}
console.log(`Aprovados: ${aprovados}`)
console.log(`Reprovados: ${reprovados}`)
