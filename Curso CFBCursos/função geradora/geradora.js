function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
    yield 'Amarelo'
    yield 'Roxo'
    yield 'Preto'
    yield 'Branco'

}
for(let c of cores()){
    console.log(c)
}