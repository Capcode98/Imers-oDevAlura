var listaFilmes = []
var mostraFilmes = document.querySelector('.resultado')
var listaDeImagensFilmes = []

function AddFilme() {
    listaFilmes.push(document.querySelector('#valor').value)
    mostraFilmes.innerHTML += `<li>${document.querySelector('#valor').value}</li>`
}

function adicionarImagemDeFilme() {
    listaDeImagensFilmes.push(document.querySelector("#filme").value)
    imagensDeFilmes.innerHTML += `<img src='${document.querySelector("#filme").value}'>`
    
}

/*
for (var k = 0; k < listaDeFilmes.length; k++) {
        resultado0.innerHTML = listaDeFilmes[k]
        resultado1.innerHTML = listaDeFilmes[k]

    }
*/
