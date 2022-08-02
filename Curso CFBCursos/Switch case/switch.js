let pos,msg
pos = 2


switch (pos) {
    case 1:
        msg = 'Primeiro lugar <br> Medalha de Ouro'
        break;
    case 2:
        msg = 'Segundo lugar <br> Medalha de Prata'
        break;
    case 3:
        msg = 'Terceiro lugar <br> Medalha de Bronze'
        break;
    default:
        msg = 'Não foi ao pódio'
        break;
}

switch (pos) {
    case 1:
    case 2:
    case 3:
        msg += ' <br> Subiu ao pódio'
        break;
    default:
        msg += ' <br> Não obteve colocação'
        break;
}

console.log(msg)