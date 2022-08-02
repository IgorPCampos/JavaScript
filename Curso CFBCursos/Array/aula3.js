/*
let mochila = [],pos

mochila.push('Faca') //0
mochila.push('Corda') //1
mochila.push('Picareta') //2
mochila.push('Chave') //3
mochila.push('Lanterna') //4
mochila.push('Pedra') //5

console.log(mochila.indexOf('Lanterna')) // Mostra a posição do elemento
pos = mochila.indexOf('Arma') //Não exite no array

console.log(pos) 
if(pos==-1){
    pos = 'Não existe no array'
}
console.log(pos)
*/

/*
let num = [4,2,3,9,4,0]
let numeros
num.sort() //Coloca na ordem crescente
num.reverse() // Inverte a ordem (Se eu colocar .sort antes vai ser a mesma coisa que colocar na ordem decrescente, MAS se eu não colocar .sort antes vai somente inverter a ordem original)
console.log(num)
numeros= num.join()
console.log(numeros)
*/


let mochila1 = [],mochila2 = [], mochila = []

mochila1.push('Faca') //0
mochila1.push('Corda') //1
mochila1.push('Picareta') //2
mochila1.push('Chave') //3
mochila1.push('Lanterna') //4
mochila1.push('Pedra') //5

mochila2.push('Arame') //0
mochila2.push('Luvas') //1
mochila2.push('Joelheira') //2
mochila2.push('Meias') //3
mochila2.push('Moeda') //4
mochila2.push('Canivete') //5

mochila = mochila1.concat(mochila2)
console.log(mochila)
console.log(mochila1.length)
console.log(mochila.length)
