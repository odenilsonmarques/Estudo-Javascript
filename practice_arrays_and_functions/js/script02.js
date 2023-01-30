
let num = document.querySelector('input#numero')
let result = document.querySelector('div#resultado')
var valores = []

function isNumero(n, l){
    if(Number(n)){
        return true;
    }
    else{
        return false;
    }
}

function adicionarNumeros() {

    if(isNumero(num.value, valores)) {
        valores.push(Number(num.value))

        if(valores.length <= 3){
            console.log(`o vetor valores tem ${valores.length} posições`)

            let qtdDeValores = valores.length
            let soma = 0;

            for(let pos in valores){
                soma += valores[pos]
            }

            result.innerHTML = ''
            result.innerHTML += `O total de valores cadastrado é de ${qtdDeValores}<br>`
            result.innerHTML += `A soma dos valores é ${soma}<br>`
            result.innerHTML += `A media dos valores é de ${soma/qtdDeValores}`

        }else{
            alert('lista completa')
            valores.exit
        }
        num.value = ''
        num.focus()
      
    }
}


