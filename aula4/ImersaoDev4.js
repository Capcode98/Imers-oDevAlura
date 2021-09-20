let listaFilmes = [];
let mostraFilmes = document.querySelector('.resultado');

const AddFilme = () => {
    listaFilmes.push(document.querySelector('#valor').value)
    mostraFilmes.innerHTML += `<li>${document.querySelector('#valor').value}</li>`
}
    


/*
function AddFilmeWithFor() {
    listaDeFilmes.push(document.getElementById("valor").value)
    for (var k = 0; k < listaDeFilmes.length; k++) {
        resultado0.innerHTML = listaDeFilmes[k]
        resultado1.innerHTML = listaDeFilmes[k]

    }
}
*/
