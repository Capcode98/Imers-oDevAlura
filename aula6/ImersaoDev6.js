/*var gradesJogadores = document.querySelector('#tabelaJogadores')
var jogadores = [] 
var vitoriaJogador = ''
var empateJogador = ''
var derrotaJogador = ''

function adicionarNovaVitoria(nomedojogador) {
    vitoriaJogador = parseInt(document.querySelector(`#${nomedojogador}"vitoria"`).value) += 1
    console.log(vitoriaJogador)
    
}

function adicionarNovaEmpate(nomedojogador) {
    empateJogador = parseInt(document.querySelector(`#${nomedojogador}"empate"`).value) += 1
    console.log(empateJogador)
}

function adicionarNovaDerrota(nomedojogador) {
    derrotaJogador = parseInt(document.getElementById(`#${nomedojogador}"derrota"`).value) += 1
    console.log(derrotaJogador)
}


function adicionarJogador(){ 

    nomedojogador = document.querySelector('#nomejogador').value
    
   
     
    gradesJogadores.innerHTML += 
        `<tr>
        <td id="${document.querySelector('#nomejogador').value}nome">${document.querySelector('#nomejogador').value}</td>
        <td id="${document.querySelector('#nomejogador').value}vitoria">0</td>
        <td id="${document.querySelector('#nomejogador').value}empate">0</td>
        <td id="${document.querySelector('#nomejogador').value}derrota">0</td>
        <td id="${document.querySelector('#nomejogador').value}pontos">0</td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
        </tr>`
    jogadores += `${nomedojogador}`
    limparArea("#nomejogador")

    var a = document.querySelector(`"#${nomedojogador}vitoria"`)
    var b = document.querySelector(`"#${nomedojogador}empate"`).values
    var c = document.querySelector(`"#${nomedojogador}derrota"`).values
    console.log(nomedojogador)
    console.log(a)
    console.log(b)
    console.log(c)

   
}
function adicionarVitoria(k) {
    var p = document.querySelector("#vitoriamarco")
    p.firsChild.nodeValue = k
    adicionarNovaVitoria(p.firsChild.nodeValue.value)
    
}

function adicionarEmpate() {
    adicionarNovaEmpate(b)
}

function adicionarDerrota() {
    adicionarNovaDerrota(c)
}

function mostrarJogador(){
    console.log(jogadores[3])
}*/


function limparArea(y) {
    document.querySelector(y).value = ""
}

function adicionarJogador() {
    var nome1 = document.getElementById("nomejogador").value
    var player = {nome:`${String(nome1)}`,vitorias: 0,empates: 0,derrotas: 0,pontos: 0}
    limparArea("#nomejogador")
    jogadores.push(player)
    exibeJogadorNaTela()
}

var jogadores = [] 


function exibeJogadorNaTela(jogador) {
    var elemento = ""
    for (var i = 0; i < jogadores.length;i++) {
        elemento += `<tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`
    }
    var tabelaJogadores = document.querySelector("#tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

function adicionarVitoria(i) {
    jogadores[i].vitorias += 1
    jogadores[i].pontos = calcularPontos(i)
    exibeJogadorNaTela()
}

function adicionarEmpate(i) {
    jogadores[i].empates += 1
    jogadores[i].pontos = calcularPontos(i)
    exibeJogadorNaTela()
}

function adicionarDerrota(i) {
    jogadores[i].derrotas += 1
    exibeJogadorNaTela()
}

function mostrarJogador(){
    console.log(jogadores)
}

function calcularPontos(i){
    var pontos = jogadores[i].vitorias * 3 + jogadores[i].empates
    return pontos
}
