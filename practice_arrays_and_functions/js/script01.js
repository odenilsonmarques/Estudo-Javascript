
let num = document.querySelector('input#numero')
let listNum = document.querySelector('select#listaNumeros')
let result = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function isList(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function adicionarNumero(){
    if(isNumero(num.value) && !isList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        listNum.appendChild(item)
        result.innerHTML = ''
    }else{
        alert('Numero inválido ou ja existe na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar !') 
    }else{
        //qtd de numero que tem no array
        let qtdDeValores = valores.length 

        //capturando o maior e o menor valor
        let maiorNum = valores[0]
        let menorNum = valores[0]

        //soma dos valores
        let soma = 0

        //media dos valores
        let media = 0

        for(let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maiorNum)
                maiorNum = valores[pos]
            
            if(valores[pos] < menorNum)
                menorNum = valores[pos] 
        }
            media = soma / qtdDeValores
            

        result.innerHTML = ''
        result.innerHTML += `Ao todos temos ${qtdDeValores} números cadastrados ! <br>`
        result.innerHTML += `O maior valor informado foi ${maiorNum} ! <br>`
        result.innerHTML += `O menor valor informado foi ${menorNum} ! <br>`
        result.innerHTML += `A soma dos valores é de ${soma} ! <br>`
        result.innerHTML += `A média do valores é de ${media} ! <br>`
    }
}
