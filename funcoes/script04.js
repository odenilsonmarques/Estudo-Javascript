//função para calcular o fatorial de um numero usando funcao recursiva, ou seja essa função retorna ela mesma
function fatorial(numero){
    //lembrar que o fatoral de 1 é 1
    if(numero == 1){
        return 1
    }else{
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))