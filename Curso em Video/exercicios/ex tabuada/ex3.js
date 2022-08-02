function calcular(){
    let num = document.getElementById(`num`)
    let conteudo = ""
    let tabuada = 0
    let n = Number (num.value)
    if (num.value.length == 0){
        document.getElementById(`res`).innerHTML = `Digite um número `
    } else {
        while (tabuada <=10){
            conteudo = conteudo + `${n} x ${tabuada} = ${n*tabuada}  </br>`
            tabuada++
        }
    }
    document.getElementById(`res`).innerHTML = conteudo
}