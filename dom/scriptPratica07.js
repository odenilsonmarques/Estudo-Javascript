//usando o querySelector para buscar a <li> e seu parente mais proximo, nesse caso a <ul>

console.log(document.querySelector('li'))

//alpicando um background no parente mais proximo desse LI, ou seja na <UL></UL>
document.querySelector('li').parentNode.setAttribute('style', 'background-color:green')