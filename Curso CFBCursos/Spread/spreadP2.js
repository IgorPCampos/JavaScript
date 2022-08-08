/*const produtos=[
    {
       id:'001',
       desc:['Mouse','25'] 
    },
    {
       id:'002',
       desc:['Teclado','50'] 
    },
    {
       id:'003',
       desc:['Monitor','430'] 
    }
]
const p = [...produtos]

console.log(p)
*/

//Concatenação de arrays com spread
const n1=[100,200,300]
const n2=[400,500,600]
const n3=[700,800,900]
const n4=[...n1,...n2,...n3]

console.log(n4)