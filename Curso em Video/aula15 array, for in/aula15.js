let num = [5,8,2,9,3]

num.sort() //arruma em ordem crescente
num.push(1) //coloca como último número
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //Mostra quantas variaveis tem
console.log(`O primeiro valor é ${num[0]}`)// A contagem é de [0,1,2,...]
let pos = num.indexOf(4) // Mostra qual a posicão do número; Se o valor não existir ele coloca -1
if(pos == -1){
    console.log(`O valor não existe`)
} else {
console.log(`O valor está na posição ${pos}`)
}