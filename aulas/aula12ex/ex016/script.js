function verificar() {
    var data = new Date() 
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'feminino'
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do sexo ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}