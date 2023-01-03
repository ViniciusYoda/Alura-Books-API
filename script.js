async function buscaEndereco(cep) {
   try {
      const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const consultaCepConvertida = await consultaCep.json()
      if (consultaCepConvertida.erro) {
         throw Error('CEP não existente!');
      }

      console.log(consultaCepConvertida);
      return consultaCepConvertida

   } catch (erro) {
      console.log(erro);
   }
}

let ceps = ['01001000', '07631335'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))