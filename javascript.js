function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) >= ano || Number(fano.value) === 0 ) {
       window.alert('[Erro] Digite os dados novamente')   
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade > 0 && idade <=10) {
            img.setAttribute('src','menino.png')
            } else if (idade <21) {
            img.setAttribute('src','jovem m.png')    
            } else if (idade <50) {
            img.setAttribute('src','homem.png')
            } else {
            img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade > 0 && idade <=10) {
                img.setAttribute('src','menina.png')
                } else if (idade<21) {
                img.setAttribute('src','jovem f.png')    
                } else if (idade <50) {
                img.setAttribute('src','mulher.png')
                } else {
                img.setAttribute('src','idosa.png')
                }
        } 
    res.textAlign = 'center'
    res.innerHTML = `Verificado ${gênero} com ${idade} anos`
    res.appendChild(img)
 }
}      