var valorAleatorio = parseInt(Math.random() * 11)

function Chutar(){
    var r = parseInt(document.getElementById("valor").value)
    if (valorAleatorio == r){
        resultado.innerHTML = 'Voce acertou ! ' + valorAleatorio
    }
    else if(r > 10 || r < 0){
        resultado.innerHTML = 'Voce chutou um valor fora do intervalo de 0 a 10! Escolha um valor valido! '
    }
    else{
        resultado.innerHTML = 'voce errou! '
    }


}
