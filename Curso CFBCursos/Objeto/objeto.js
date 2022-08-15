const veiculo={
    marca: 'BMW',
    modelo: 'Golf',
    /*info:function(){
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
    */
}
/*
let c2=Object.create(carro)

c2.marca='Honda'
c2.modelo='HRV'
carro['marca']='GM'
carro['modelo']='Camaro'
//carro.marca='Honda'
carro.info()
c2.info()
*/

const caracteristicas={
    cor: 'Branco',
    cambio: 'automatico'
}

delete caracteristicas.cor
const carro=Object.assign(veiculo,caracteristicas)
console.log(carro)