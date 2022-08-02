function calcular(){
    let nome = prompt('Digite o seu nome ','Nome aqui')
    let res = confirm(nome +', você gosta de estudar?')
    
    if(res ==  true){
        alert('Parabens')
    } else{
        alert('Vagabundo')
    }
    alert(res)
}