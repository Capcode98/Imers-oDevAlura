function Calcular(){
    var p = document.getElementById("valor1")
    var q = document.getElementById("valor2")
    var r = document.getElementById("valor3")
    var s = document.getElementById("valor4")
    var valor_p = parseFloat(p.value)
    var valor_q = parseFloat(q.value)
    var valor_r = parseFloat(r.value)
    var valor_s = parseFloat(s.value)
    var sum = (valor_p + valor_q + valor_r + valor_s)
    var media = sum/4

    Media.innerHTML = media

}


