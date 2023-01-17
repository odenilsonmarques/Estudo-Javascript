function carregaPagina(){
    var mensagem = document.getElementById('exibeMensagem')
    var foto = document.getElementById('imagemViaJs')
    var data = new Date()//declarando o objeto date para poder pegar a hora
    var horaDoObjetoDate = data.getHours()

    mensagem.innerHTML = `<strong>Olá são ${horaDoObjetoDate} horas</strong>`

    if(horaDoObjetoDate > 0 && horaDoObjetoDate <= 12){
        foto.src = 'img/manha.jpg'
        document.body.style.background = '#FFDEAD'
    }
    else if(horaDoObjetoDate > 12 && horaDoObjetoDate <=18){
        foto.src = 'img/tarde.jpg'
        document.body.style.background = '#FF4500'
    }
    else{
        foto.src = 'img/noite.jpg'
        document.body.style.background = '#808080'
    }
}