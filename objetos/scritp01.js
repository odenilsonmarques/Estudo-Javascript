var pessoa = {

    nome: 'Odenilson',
    email: 'od@gmail.com',

   //função declarada dentro de um objeto é considerada um método
   nomeCompleto: function(){
        return this.nome + ' ' + this.email
   }
}

console.log(pessoa)

console.log(pessoa.nomeCompleto)
