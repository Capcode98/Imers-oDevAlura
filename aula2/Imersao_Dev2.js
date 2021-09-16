function Converter(){
    var dolar = document.getElementById('valor')
    var dolar_value = parseFloat(dolar.value)
    var real = (dolar_value * 5.25)
    valorConvertido.innerHTML ='R$: '+ real 
}
