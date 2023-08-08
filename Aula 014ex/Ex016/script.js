
function Contar(){
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txt3')
    var res = document.getElementById('Res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO: Verifique os seus dados')
        res.innerHTML = ('Impossível contar!')
        if (passo <= 0){
            window.alert('Passo Inválido, colocando passo para 1')
            p = 1
        }
    } else{
        res.innerHTML = ('Contando: ')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i<f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += (`${c} \u{1F449} `)
            }
        }else {
            for (var c = i; c > f; c -= p){
                res.innerHTML += (`${c} \u{1F449} `)
            } 
        }
        res.innerHTML += ('\u{1F3C1}')
    }
}
