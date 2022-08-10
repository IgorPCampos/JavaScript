/*function soma(...num){
    let res = 0
    let qtde=num.length
    for(let i=0;i<qtde;i++){
        res+=num[i]
    }
    return res
}
console.log(soma(9,5,6,3))
*/
function soma(...num){
    let res = 0
    for(n of num){
        res+=n
    }
    return res
}
console.log(soma(9,5,6,3))