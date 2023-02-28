// Em arrays temos: chaves e valores. As posições das chaves sempre iniciam com zero, cada valor é atribuido a posição de uma chave

let num = [2,4,5,3]

console.log(num)

console.log(`o vetor num tem ${num.length} posições`)

// exibindo a valor da posição zero
console.log(`O valor do vetor na posição zero é: ${num[0]}`)


// /exibindo os valores do vetor em ordem
console.log(num.sort())

//adicionando um valor no final do vetor. 
num.push(10)
console.log(num)

//adicionando um valor no inicio do vetor. 
num.unshift(0)
console.log(num)

//removendo o ultimo valor do array ou vetor. 
num.pop()
console.log(num)

//removendo o primeiro valor do array ou vetor. 
num.shift()
console.log(num)

//invetendo a ordem do array
num.reverse()
console.log(num)