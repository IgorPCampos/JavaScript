function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffba03'
    }
    else if (hora>= 12 && hora <18){
        img.src = 'fototarde.png'
        document.body.style.background = '#95594e'
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#102638'
    }
}