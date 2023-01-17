function descobrindoIdade(){

    var result = document.getElementById('resultado')
    var dateCurrent = new Date()
    var yearCurrent = dateCurrent.getFullYear()
    var yearOfBirth = Number(document.getElementById('anoNascimento').value)
    var age = yearCurrent - yearOfBirth

    if(yearOfBirth == 0 || yearOfBirth > yearCurrent){
        alert('ERRO! VERIFIQUE OS DADOS INFORMADOS')
    }
    else{
        var men = document.getElementById('masculino')
        var woman = document.getElementById('feminino')
        var genre = ''
        //criando um elemento via js e armazenando nele o elemento id declarado na tag img do html
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        if(men.checked){
            genre = 'Homem'
            if(age > 0 && age <=10){
                image.setAttribute('src','img/criancaM.jpg')
            }else if(age > 10 && age <=18){
                image.setAttribute('src','img/jovemM.jpg')
            }else if(age > 18){
                image.setAttribute('src','img/adultoM.jpg')
            }
        }
        else if(woman.checked){
            genre = 'Mulher'
            if(age > 0 && age <=10){
                image.setAttribute('src','img/criancaF.jpg')
            }else if(age > 10 && age <=18){
                image.setAttribute('src','img/jovemF.jpg')
            }else if(age > 18){
                image.setAttribute('src','img/adultoF.jpg')
            }
        }
        result.innerHTML = 'SUA IDADE É ' +age+ ' ANOS  E VOCÊ É ' + genre
        result.appendChild(image)
        result.style.textAlign = 'center'
    }
   
}