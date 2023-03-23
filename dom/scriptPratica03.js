

console.log(document.getElementsByTagName('div'))

console.log(document.getElementsByTagName('div')[2])

//armazenando  em variavel
var tagNames = document.getElementsByTagName('div')

tagNames[0].innerHTML = '<h1>Acessando div na posicao 0 </h1>'
tagNames[1].innerHTML = '<h1>Acessando div na posicao 1 </h1>'
tagNames[2].innerHTML = '<h1>Acessando div na posicao 2 </h1>'


