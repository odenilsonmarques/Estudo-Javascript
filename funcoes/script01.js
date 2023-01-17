//função para retornar se o numero é PAR ou IMPAR

function NumeroParImpar(numero){

    if(numero % 2 == 0){
        return 'Numero Par !'
    }else{
        return 'Numero Impar !'
    }
}

let result = NumeroParImpar(30)

console.log(result)