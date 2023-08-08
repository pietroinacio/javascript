function tabuada(){
    var num = window.document.getElementById('num')
    var tabuada = window.document.getElementById('tabuada')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c<=10){
            var item = document.createElement('option')
            tabuada.appendChild(item)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab$`
            c++
        }
    }
}