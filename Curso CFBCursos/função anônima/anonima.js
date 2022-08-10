/*
const alo = function(){
    return 'Olá Mundo'
}
console.log(alo())
*/

let soma = function(...num){
    let res = 0
    for(n of num){
        res+=n
    }
    return res
}
console.log(soma(1,4,7))
console.log(soma(3,8))
console.log(soma(5))
console.log(soma)