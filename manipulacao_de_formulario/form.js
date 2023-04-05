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

    

    //esse return tem ligação com return que foi definido no form na função onSubmit, porem exitem outras formas
    // A função dele é evitar que o form seja submetido ou seja enviado
    return false;
}