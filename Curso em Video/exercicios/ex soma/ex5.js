let num = document.getElementById(`num`)
let lista = document.getElementById(`flista`)
let res = document.getElementById(`res`)
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true 
    } else{
        return false
    }
}
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function calcular(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        alert(`Tudo ok`)
    }else{
        alert(`Valor inválido ou já encontrado na lista`)
    }
}