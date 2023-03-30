function exibeFooter(){
    // 1º pegar a altura da pagina
    var altura = document.body.scrollHeight

    //2ª definir a posicao e passar a altura que foi pego no passa anterior
    // window.scrollTo(0, altura)


    //outra forma de usar, nesse caso scroll fica mais suave
    window:scroll({
        top:altura,
        left:0,
        behavior:'smooth'
    })

    
}

function exibeHeader(){
   
    //1ª passa-se a posicão e altura nesse caso é zero, pq volta ao inicio
    // window.scrollTo(0, 0)

    //outra forma de usar, nesse caso scroll fica mais suave
    window:scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })

}