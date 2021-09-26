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
        <h3>Escolha o imagem da sua carta:</h3>
        <input id="imagemdacarta" type="text" value=""><br>
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
    var imagem = document.getElementById("imagemdacarta").value
    var força = document.getElementById("atributo1").value
    var defesa = document.getElementById("atributo2").value
    var agilidade = document.getElementById("atributo3").value
    var mana = document.getElementById("atributo4").value
    var inteligencia = document.getElementById("atributo5").value

    var player = {Nome: nome,Imagem:String(imagem),atributo:{Força: força, Defesa: defesa, Agilidade: agilidade, Mana: mana, Inteligencia: inteligencia}}
    
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
        
        exibirCartaJogador()
    }
    else{
        alert("adicione mais cartas para poder jogar, o minimo são 2 cartas")
        CriarCartas()
    }   
}

function exibirOpçoes(){
    var opçoesTxt = ''
    for (var atributos in cartas[0].atributo) {
        opçoesTxt += `<input type="radio" value="${atributos}" name="atributos">${atributos} ${cartaDoJogador.atributo[atributos]}<br>`
    }
    return opçoesTxt
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
    var atributoDaCartaJogador = cartaDoJogador.atributo[atributoSelecionado]
    var atributoDaCartaComputador = cartaDoComputador.atributo[atributoSelecionado]
    console.log(atributoDaCartaJogador)
    console.log(atributoDaCartaComputador)

    if (atributoDaCartaComputador > atributoDaCartaJogador){
        console.log(atributoDaCartaJogador)
        console.log(atributoDaCartaComputador)
        resultado.innerHTML =`<p>${atributoDaCartaJogador} Voce venceu! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }
    if (atributoDaCartaJogador > atributoDaCartaComputador){
        console.log(atributoDaCartaJogador)
        console.log(atributoDaCartaComputador)
        resultado.innerHTML =`<p>${atributoDaCartaJogador} Voce perdeu! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }
    if (atributoDaCartaJogador == atributoDaCartaComputador){
        console.log(atributoDaCartaJogador)
        console.log(atributoDaCartaComputador)
        resultado.innerHTML =`<p>${atributoDaCartaJogador} Voce empatou! o atributo da carta da maquina foi : ${atributoDaCartaComputador} </p>`
    }
    exibirCartaMaquina()
}

function exibirCartaJogador(){
    var divCartaJogador = document.querySelector("#carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaDoJogador.Imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = `<div id="opçoes" class="carta-status">`
    var nomeDaCartaDoJogador = `<p class="carta-subtitle">${cartaDoJogador.Nome}</p>`
    divCartaJogador.innerHTML = `${moldura}${nomeDaCartaDoJogador}${tagHTML}${exibirOpçoes()}</div>`
}

function exibirCartaMaquina(){
    var divCartaComputador = document.querySelector("#carta-maquina")
    divCartaComputador.style.backgroundImage = `url(${cartaDoComputador.Imagem})`
    var moldura1 = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML1 = `<div id="opçoes" class="carta-status">`
    var nomeDaCartaDoComputador = `<p class="carta-subtitle">${cartaDoComputador.Nome}</p>`
    var opçoesTxt1 = ''
    for (var Osatributos in cartas[0].atributo) {
        opçoesTxt1 += `<p type="text" value="${Osatributos}" name="">${Osatributos} ${cartaDoComputador.atributo[Osatributos]}</p>`
    }
    divCartaComputador.innerHTML = `${moldura1}${nomeDaCartaDoComputador}${tagHTML1}${opçoesTxt1}</div>`
}

function limparArea(y) {
    document.querySelector(y).value = ""
}
