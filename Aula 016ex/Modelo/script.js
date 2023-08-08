let num = document.getElementById('num')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function Numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function Lista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(n){
    if (Numero(num.value) && !Lista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado`)
        sel.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione um valor antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let soma = 0
        let media = 0
        let menor = valores[0] //O primeiro número digitado não vai ter nem maior ou menor
        for(let pos in valores){ //Verifica cada posição do valores[]
            soma += valores[pos] //Soma de 0 com cada posição do valores[]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo há ${total} elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores resulta em ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os números é igual a ${media}.</p>` 
    }
}