var dt = new Date() 
// var dt = new Date(2020,7,12) Ano,mês,dia,hora,min,seg,miliseg

console.log(dt.getDate()) // Retorna o dia do mês
console.log(dt.getDay())
// 0 = Domingo
// 1 = Segunda
// 2 = Terça
// 3 = Quarta
// 4 = Quinta
// 5 = Sexta
// 6 = Sábado
console.log(dt.getMonth())
// 0 = Janeiro
// 1 = Fevereiro
// 2 = Março 
// 3 = Abril
// 4 = Maio
// 5 = Junho
// 6 = Julho
// 7 = Agosto
// 8 = Setembro
// 9 = Outubro 
// 10 = Novembro
// 11 = Dezembro
console.log(dt.getFullYear()) // Ano atual
console.log(dt.getHours()) // Hora atual
console.log(dt.getMinutes()) // minuto atual
console.log(dt.getSeconds()) // segundos atual
console.log(dt.getMilliseconds()) //Milliseconds atual
console.log(dt.getUTCDate())
console.log(dt.toDateString()) // Padrão EUA
console.log(dt.toLocaleDateString()) // Retorna data
console.log(dt.toLocaleString()) //Retorna data e hora
console.log(Date()) // Informações gerais