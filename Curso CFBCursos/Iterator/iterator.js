let num=[3,5,8,3,7,8,2]
/*
Iterator automatico
for(n of num)
console.log(n)
*/

let it=num[Symbol.iterator]()
console.log(it.next().value)
console.log(it.next().value)