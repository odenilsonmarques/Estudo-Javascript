// function soma(n1, n2){
//     return n1 + n2;
// }


// let result = soma(1, 8)
// console.log(result)

// outra forma de exibir o resultado em funções
// console.log(soma(1, 3))

//funcao com parametros pre-definidos. Nesse cado pode acontecer de algum parametro ficar sem o valor, caso isso ocorra será definido como NAN. Para evitar esse erro é pre-definido os valore nos parametros
function mult(n1 = 0, n2 = 0){
    return n1 * n2;
}

// outra forma de exibir o resultado em funções
console.log(mult(6))