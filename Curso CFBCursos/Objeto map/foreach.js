let produtos = new Map([
    ["1","Mouse"],
    ["2","Teclado"],
    ["3","Monitor"],
    ["4","Gabinete"]
])
console.log(produtos.has('7')? 'Encontrado': 'Não encontrado')
function info(chave,valor){
    console.log(`Chave: ${chave}, Valor: ${valor}`)
}
//produtos.forEach(info)
let key=produtos.keys()
let value=produtos.values()
console.log(key.next().value)
console.log(value.next().value)