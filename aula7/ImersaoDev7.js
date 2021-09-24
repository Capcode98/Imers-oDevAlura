var criarCarta = document.querySelector('#façaaqui')
var resultado = document.querySelector('#resultado')
var indiceCartaDoComputador
var indiceCartaDoJogador
var cartaDoComputador
var cartaDoJogador 

document.querySelector('#btnJogar').disabled = true


function CriarCartas(){

    criarCarta.innerHTML +=`<form id="form2">
        <h2>Escolha o nome da sua carta:</h2>
        <input id="nomedacarta" type="text" value=""><br>
        <p>Escolha o atributo da sua carta</p><p>(força(valores de 0 a 10)):</p>
        <input id="atributo1" type="number"><br>
        <p>Escolha o atributo da sua carta</p><p>(defesa(valores de 0 a 10)):</p>
        <input id="atributo2" type="number"><br>
        <p>Escolha o atributo da sua carta</p><p>(agilidade(valores de 0 a 10)):</p>
        <input id="atributo3" type="number"><br>
        <p>Escolha o atributo da sua carta</p><p>(mana(valores de 0 a 10)):</p>
        <input id="atributo4" type="number"><br>
        <p>Escolha o atributo da sua carta</p><p>(inteligencia(valores de 0 a 10)):</p>
        <input id="atributo5" type="number"><br>
        <button type="button" id="btnADD" onclick="adicionarCarta()">adicionar carta</button> 
        </form>`

}

function adicionarCarta() {
    
    var nome = document.getElementById("nomedacarta").value
    var força = document.getElementById("atributo1").value
    var defesa = document.getElementById("atributo2").value
    var agilidade = document.getElementById("atributo3").value
    var mana = document.getElementById("atributo4").value
    var inteligencia = document.getElementById("atributo5").value

    var player = {Nome: nome,atributo:{Força: força, Defesa: defesa, Agilidade: agilidade, Mana: mana, Inteligencia: inteligencia}}
    
    limparArea("#nomedacarta")
    limparArea("#atributo1")
    limparArea("#atributo2")
    limparArea("#atributo3")
    limparArea("#atributo4")
    limparArea("#atributo5")

    criarCarta.innerHTML = ''

    cartas.push(player)
    
}

var cartas = []

function sortearCarta(){
    if (cartas.length > 1){
        indiceCartaDoComputador = (parseInt(Math.random() * cartas.length))
        cartaDoComputador = cartas[indiceCartaDoComputador]
        indiceCartaDoJogador = (parseInt(Math.random() * cartas.length))
        if (indiceCartaDoJogador == indiceCartaDoJogador){
            while(indiceCartaDoJogador == indiceCartaDoComputador){
                indiceCartaDoJogador = (parseInt(Math.random() * cartas.length))
            }
        }
        cartaDoJogador = cartas[indiceCartaDoJogador]
        document.querySelector('#btnJogar').disabled = false
        document.querySelector('#btnSortear').disabled = true
        resultado.innerHTML = `<p> a sua carta sorteada foi: nome: ${cartaDoJogador.Nome} , força: ${cartaDoJogador.atributo["Força"]} , defesa: ${cartaDoJogador.atributo["Defesa"]} , agilidade: ${cartaDoJogador.atributo["Agilidade"]} , mana: ${cartaDoJogador.atributo["Mana"]} , inteligencia: ${cartaDoJogador.atributo["Inteligencia"]} </p>`
        
        exibirOpçoes()
    }
    else{
        alert("adicione mais cartas para poder jogar, o minimo são 2 cartas")
        CriarCartas()
    }   
}

function exibirOpçoes(){
    var opçoes = document.querySelector("#opcoes")
    var opçoesTxt = ''
    for (var atributos in cartas[0].atributo) {
        opçoesTxt += `<input type="radio" value="${atributos}" name="atributos">${atributos}`
        
    }
    opçoes.innerHTML = opçoesTxt
}

function obtemAtributoSelecionado(){
    var Elementos = document.getElementsByName("atributos")
    for(var i = 0 ; i < Elementos.length; i++ ){
        if(Elementos[i].checked == true){
            return Elementos[i].value
        }
    }
}

function jogar(){

    resultado.innerHTML = ''

    var atributoSelecionado = obtemAtributoSelecionado()
    var atributoDaCartaJogador = cartaDoJogador.atributo[`${atributoSelecionado}`]
    var atributoDaCartaComputador = cartaDoComputador.atributo[`${atributoSelecionado}`]

    if (atributoDaCartaJogador > atributoDaCartaComputador){
        resultado.innerHTML = `<p> a sua carta sorteada foi: nome: ${cartaDoJogador.Nome} , força: ${cartaDoJogador.atributo["Força"]} , defesa: ${cartaDoJogador.atributo["Defesa"]} , agilidade: ${cartaDoJogador.atributo["Agilidade"]} , mana: ${cartaDoJogador.atributo["Mana"]} , inteligencia: ${cartaDoJogador.atributo["Inteligencia"]} </p>`
        resultado.innerHTML +=`<p>Voce venceu! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }
    else if (atributoDaCartaComputador > atributoDaCartaJogador ){
        resultado.innerHTML = `<p> a sua carta sorteada foi: nome: ${cartaDoJogador.Nome} , força: ${cartaDoJogador.atributo["Força"]} , defesa: ${cartaDoJogador.atributo["Defesa"]} , agilidade: ${cartaDoJogador.atributo["Agilidade"]} , mana: ${cartaDoJogador.atributo["Mana"]} , inteligencia: ${cartaDoJogador.atributo["Inteligencia"]} </p>`
        resultado.innerHTML +=`<p>Voce perdeu! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }
    else{
        resultado.innerHTML = `<p> a sua carta sorteada foi: nome: ${cartaDoJogador.Nome} , força: ${cartaDoJogador.atributo["Força"]} , defesa: ${cartaDoJogador.atributo["Defesa"]} , agilidade: ${cartaDoJogador.atributo["Agilidade"]} , mana: ${cartaDoJogador.atributo["Mana"]} , inteligencia: ${cartaDoJogador.atributo["Inteligencia"]} </p>`
        resultado.innerHTML +=`<p>Voce empatou! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }console.log(cartaDoComputador)
}

function limparArea(y) {
    document.querySelector(y).value = ""
}
