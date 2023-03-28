//capturando os filho de uma tag, nesse exemplo usei as <li> de uma <UL>, porem podria ser outra tag
var ul = document.querySelector('ul')
var li = ul.children

//retornando todos os filhos
// console.log(li)

//alterando o valor do primeiro filho
// li[0].innerHTML = 'Alterado'


//retornando apenas o primeiro filhos
console.log(ul.firstElementChild.innerHTML = 'alterado alterado')

//retornando apenas o ultimo filhos
console.log(ul.lastElementChild.innerHTML = 'alterado alterado alterado')