let produtos = new Map([
    ["1","Mouse"],
    ["2","Teclado"],
    ["3","Monitor"],
    ["4","Gabinete"]
])

//produtos.delete('1') 
/*
           chave , valor
produtos.set("1","Mouse") .set = definir os elementos
.set("2","Teclado")
.set("3","Monitor")
.set("4","Gabinete")
*/
console.log(produtos.size)

console.log(produtos.get('3')) // .get pega os elementos

for(p of produtos){
    //Retorna o vetor
    //console.log(p)
    //Retorna a primeira coluna
    //console.log(p[0])
    //Retorna a segunda coluna
    console.log(p[1])
}

//produtos.clear() 
//console.log(produtos)
