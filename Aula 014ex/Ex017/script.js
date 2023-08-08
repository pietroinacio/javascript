function tabuada(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            item.value = `tab$`
            c++
        }
            
        }
    }