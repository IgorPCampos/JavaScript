const pessoa = {
    nome:'jhonatan',
//  (key)  (value)
    idade: 25
}

for(let chave in pessoa){
    console.log(chave,pessoa['nome'])
}


const cores = ['vermelho','Azul','Verde']

for (let indice in cores){
    console.log(indice,cores[indice] )
}