// Se a hora estiver entre 6 a 12 = Bom dia
// Se a hora estiver entre 13 a 18 = Boa tarde
// Caso contrário = Boa noite
let data = new Date() // Pega a data
let hora = data.getHours() // Com a data pega a hora atual

if(hora> 6 && hora <= 12){
    // Código a ser executado
    console.log('Bom dia')
}
else if(hora> 12 && hora <=18){
    // Código a ser executado
    console.log('Boa tarde')
}
else{
    // Código a ser executado
    console.log('Boa noite')
}