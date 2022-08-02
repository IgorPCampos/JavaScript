let cor = ['Branco','Vermelho']
cor.push('Roxo') //Adiciona no final da array
cor.unshift('Preto') //Adiciona no início da array
cor.pop   //Remove o ultimo elemento
cor.shift //Remove o primeiro elemento
cor.splice(1        ,                    2                      ) //Remove de qualquer posição
//       posição     quantos elemento apartir desse irá remover
console.log(cor[0])
console.log(cor[1])
console.log(cor[2])
console.log(cor[3])