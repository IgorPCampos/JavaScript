let nota = 15
let res 

if (nota>=60) {
    res = 'Aprovado '
    if(nota>=95){
        res += 'com louvor'
    } else{
        res += 'com nota normal'
    }
}
else if(nota>=40){
    res = 'Recuperação'
}
else{
    res = 'Reprovado '
    if(nota>=20){
        res+= 'com nota baixa'
    } else{
        res +='com louvor'
    }
}
console.log(res)