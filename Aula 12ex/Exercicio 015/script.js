function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('Resultado')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                img.setAttribute('src','Menino.png')
            }else if (idade <21){
                img.setAttribute('src','Jovem menino.png')
            }else if (idade<60){
                img.setAttribute('src','Homem.png')
            }else{
                img.setAttribute('src','Idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                img.setAttribute('src','Menina.png')
            }else if (idade <21){
                img.setAttribute('src','Jovem menina.png')
            }else if (idade<60){
                img.setAttribute('src','Mulher.png')
            }else{
                img.setAttribute('src','Idosa.png')
            }
        }
    } res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
    res.style.textAlign = 'center'
    res.appendChild(img)
}