var ul = document.querySelector('ul')
console.log(ul)

//inserindo uma linha antes da tag <ul>
ul.insertAdjacentHTML('beforebegin', '<hr>')

// inserindo um link depois da tag <ul>
ul.insertAdjacentHTML('afterend', '<a href="#">teste</a>')

//inserindo outra <P> depois da tag <UL> de abertura
ul.insertAdjacentHTML('afterbegin', '<p>sou um paragrafo no inicio</p>')

//inserindo outra <LI> ante da tag </UL> de fechamento
ul.insertAdjacentHTML('beforeend', '<li>Java</li>')