let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem('lista')) ?? [];
const setBanco = (banco) => localStorage.setItem('lista', JSON.stringify(banco));

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('item'); //Adiciona a classe para a label
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('lista').appendChild(item); // Adiciona o item como filho do lista
}

const limparTarefas = () => {
    const lista = document.getElementById('lista');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
    setBanco(banco)
}
    
const addItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter') {
        const banco = getBanco();
        banco.push({ 'tarefa': texto, 'status': '' });
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }
}

const removeItem = (indice) => {
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    console.log(elemento.type);
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removeItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', addItem);
document.getElementById('lista').addEventListener('click', clickItem);

atualizarTela();