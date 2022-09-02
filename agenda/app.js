/*Fazer verificação dos inputs
Limitar o numero de caracters do telefone
Fazer função de remover
*/
document.querySelector('button#add').addEventListener('click', function () {
    adicionar()
})
document.querySelector('button#remove').addEventListener('click', function () {
    remover()
})
document.querySelector('button#list').addEventListener('click', function () {
    listar()
})
document.querySelector('button#surch').addEventListener('click', function () {
    buscar()
})
var contador = 0

class Consulta {
    constructor(nome, telefone) {
      this.id = contador,
      this.nome = nome,
      this.telefone = telefone
    }
}

let consultas = [];

function adicionar(){
    var getName = document.getElementById('nome')
    if (!isNaN(getName.value)){
        alert('Numeros não são permitidos em Nome')
        return
    }
    var getTel = document.getElementById('telefone')
    if (isNaN(getTel.value)){
        alert('Letras não são permitidos em Numero')
        return
    }
    else if (getTel.value.length > 9 || getTel.value.length < 9){
        alert('Quantidades de carcteres incorreta')
        return
    }
    // criando nova consulta
    consultas.push(new Consulta(getName.value, getTel.value))
    contador++
    getName.value = ''
    getTel.value = ''
}

function listar(){
    var ordena = consultas.sort((a, b) => a.nome > b.nome ? 1 : -1)
    var getBody = document.getElementsByClassName('listBody')[0]
    getBody.innerText = ''

    for (var i = 0; i < ordena.length; i++) {
        adicionarLinha(ordena[i].id, ordena[i].nome, ordena[i].telefone)
    }
}

function buscar(){
    var getSurch = document.getElementById('buscar')
    var getBody = document.getElementsByClassName('listBody')[0]
    getBody.innerText = ''
    getSurch.value = ''

    for (var i = 0; i < consultas.length; i++){
        if(consultas[i].id == getSurch.value || consultas[i].nome.toLowerCase() == getSurch.value.toLowerCase() || consultas[i].telefone == getSurch.value ){
            adicionarLinha(consultas[i].id, consultas[i].nome, consultas[i].telefone)
        }
    }
}

function adicionarLinha(id,nome,telefone){
    //pegando elemento tabela
    var getBody = document.getElementsByClassName('listBody')[0]
    //criando uma linha na tabela
    var createTr = document.createElement('tr')
    //preenchendo a tabela
    var createTdId = document.createElement('td')
    var createTdName = document.createElement('td')
    var createTdTel = document.createElement('td')
    var createTdRemove = document.createElement('td')
    //adicionando os valores de cada dado na tela
    createTdId.innerText = id
    createTdName.innerText = nome
    createTdTel.innerText = telefone
    //cria um botao
    var removeBtn = document.createElement('button')
    //cria uma uma linha onde vai ser mostrado os botoes de remover
    createTdRemove.appendChild(removeBtn)
    //adiciona o evento de clicar e dotão e executa a função
    removeBtn.innerText = 'Remover'
    removeBtn.addEventListener('click', ()=> {
        consultas = consultas.filter((consulta)=> consulta.id !== id)
        listar()
    })
    //adicionando os dados na linha
    createTr.appendChild(createTdId)
    createTr.appendChild(createTdName)
    createTr.appendChild(createTdTel)
    createTr.appendChild(createTdRemove)
    //adicionando a linha na tabela
    getBody.appendChild(createTr)
    

}