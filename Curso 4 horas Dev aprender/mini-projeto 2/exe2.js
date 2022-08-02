let a = 12
let b = 16

if(a>b){
    console.log(`O maior valor é ${a}`)
} else if(a==b){
    console.log(`Eles tem o mesmo valor, que é ${a}`)
} else{
    console.log(`O maior valor é ${b}`)
}




let valorMaior = max(5,9)
console.log(valorMaior)

function max(num1,num2){
   return num1>num2 ? num1 : num2
}