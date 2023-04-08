function onSubmit(){
    // alert('vc submeteu o form')

    //capturando o valor campo que tem name, se tivesse id poderia capturar pelo id
    //como mais de uma campo tem name, especifico a posicão
    var name = document.getElementsByName('name')[0].value
    console.log(`nome:${name}`)

    var email = document.getElementsByName('email')[0].value
    document.getElementsByClassName('result')[0].innerText = 'Olá '+email

    var password = document.getElementsByName('password')[0].value
    document.getElementsByClassName('senha')[0].innerText = 'sua senha é '+password


    //capturando o valor do tipo checkbox, nesse caso use-se o checked, também optei por usar o id
    //se não estiver marcado tras false, caso contrario tras true
    console.log(document.getElementById('terms').checked)

    //capturando o valor do selector
    var valor = document.getElementById('state').value
    if(valor == ''){
        alert('escolha um estado')
    }

    //capturando o valor do radio
    console.log(document.querySelector('input[name="sexo"]:checked').value)

    //capturando o valor do texarea
    console.log(document.getElementsByClassName('desc')[0].value)

    

    //esse return tem ligação com return que foi definido no form na função onSubmit, porem exitem outras formas
    // A função dele é evitar que o form seja submetido ou seja enviado
    return false;
}