const notas=[4,8,1,5,9]
/*
console.log(notas)
//Spread = ...
console.log(...notas) 
*/

function soma(n1,n2,n3){
    return n1+n2+n3
}
console.log(soma(...notas))