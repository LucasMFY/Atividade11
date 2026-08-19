function b08ContarVogais(frase) {
  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;
  for(let i=0; i<frase.length; i++){
    if(vogais.includes(frase.charAt(i).toLowerCase())){
      contador++;
    }
  }
  return contador;
}

function b09InverterTexto(texto) {
  return texto.split('').reverse().join('');
}

function b10MaiorNumero(array) {
  return array.reduce( (maior, atual) => maior=atual>maior?atual:maior, 0 );
}

function b11MenorNumero(array) {
  return array.reduce( (menor, atual) => menor=atual<menor?atual:menor, 0 );
}

function b12DobrarNumeros(array) {
  return array.map( atual => atual*2 );
}

function b13FiltrarPares(array) {
  return array.filter( (atual) => atual%2==0 );
}

function b14SomarArray(array) {
  return array.reduce( (soma, atual) => soma = atual+soma );
}

function b15EncontrarNome(array, busca) {
  return array.find( atual => atual==busca );
}

function b16TemNegativo(array) {
  return array.some( atual => atual<0 );
}

function b17TodosPositivos(array) {
  return array.every( atual => atual>0 );
}

function b18PrimeiroMaiorQue(array, limite) {
  return array.find( atual => atual>limite );
}

function b19ContarPalavras(frase) {
  return frase.trim().split(/\s/).length;
}

function b20Capitalizar(frase) {
  return frase.trim().split(/\s/).map( atual => atual.charAt(0).toUpperCase() + atual.slice(1, atual.length) ).join();
}

function b21RemoverDuplicados(array) {
  return [...new Set(array)];
}

function b22CriarMapaDePrecos(produtos) {
  const mapa = new Map();

  for (const produto of produtos) {
    mapa.set(produto.nome, produto.preco);
  }

  return mapa;
}

function b23PegarValorObjeto(objeto, chave) {
  return objeto[chave];
}

function b24SomarValoresObjeto(objeto) {
  let somatoria = 0;
  for (let chave in objeto ){
    if( typeof objeto[chave] == "number" ){
      somatoria += objeto[chave];
    }
  }
  return somatoria;
}

function b27EhBissexto(ano) {
  return ( ano%400==0 || (ano%4==0 && ano%100!=0) );
}

function b30Media(lista) {
  return lista.reduce( (soma, atual) => soma+=atual, 0 )/lista.length;
}

function b32JuntarNomes(lista) {
  return lista.join(', ');
}

function b33ContemPropriedade(objeto, propriedade) {
  return objeto[propriedade]!=undefined;
}

function m04OrdenarNumeros(lista) {
  let novo = [...lista];
  return novo.sort( (a, b) => a - b);
}

function m05AgruparPorParidade(lista) {
  return {
    pares: lista.filter( atual => atual%2==0 ),
    impares: lista.filter( atual => atual%2!=0 )
  };
}

function m06ContarOcorrencias(lista) {
  let resultado = {};
  for(let i=0; i<lista.length; i++){
    if(resultado[lista[i]]){
      resultado[lista[i]]++;
    }
    else{
      resultado[lista[i]]=1;
    }
  }
  return resultado;
}

function m07ProdutosComDesconto(produtos, percentualDesconto) {
  return produtos.map( item => { return {nome: item.nome, preco: item.preco*(100-percentualDesconto)/100} });
}

function m08TotalCarrinho(carrinho) {
  return carrinho.reduce( (total, item) => total+=item.quantidade*item.preco , 0);
}

function m09BuscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find( usuario => usuario.email==email);
}

function m10UsuariosAtivos(usuarios) {
  return usuarios.filter( usuario => usuario.ativo );
}

function m11TodosMaioresDeIdade(usuarios) {
  return usuarios.every( usuario => usuario.idade>=18 );
}

function m12AlgumProdutoCaro(produtos, valorMinimo) {
  return produtos.some( produto => produto.preco>valorMinimo );
}

function m13IndexarPorId(lista) {
  const resultado = {};

  for (const item of lista) {
    resultado[item.id] = item;
  }

  return resultado;
}

function m14MesclarObjetos(objeto1, objeto2) {
  return {
    ...objeto1,
    ...objeto2
  };
}

function m15SelecionarCampos(objeto, campos) {

  const resultado = {};

  for (const campo of campos) {
    resultado[campo] = objeto[campo];
  }

  return resultado;

}

function m16OmitirCampos(objeto, campos) {
  const resultado = { ...objeto };

  for (const campo of campos) {
    delete resultado[campo];
  }

  return resultado;
}

function m17AchatarUmaCamada(lista) {
  return lista.flat();
}

function m18Intersecao(lista1, lista2) {
  return [...new Set( lista1.filter( item => lista2.includes(item) ) )];
}

function m19Diferenca(lista1, lista2) {
  return [...new Set( lista1.filter( item => !lista2.includes(item) ) )];
}

function m20FrequenciaDeLetras(texto) {
  let resultado = {};
  for (const letra of texto.replaceAll(" ", "").toLowerCase()) { //texto.replace(/\s/g, "")
    if(resultado[letra]){resultado[letra]++;}
    else{resultado[letra] = 1;}
  }
  return resultado;
}

function m21Palindromo(texto) {
  return texto.toLowerCase().split('').reverse().join('').replaceAll(' ', '') == texto.toLowerCase().replaceAll(' ', '');
}

function m26TransporMatriz(matriz) {
  const transposta = Array.from({ length: matriz[0].length }, () => []);

  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
      transposta[j][i] = matriz[i][j];
    } 
  }
  return transposta;
}

function m27RotacionarArray(lista, quantidade) {
  let resultado = [...lista];
  for(let i=0; i<quantidade; i++){
    let primeiro = resultado[0];
    resultado = resultado.slice(1, resultado.length);
    resultado.push(primeiro);
    // resultado.push(resultado[0]);
    // resultado.shift();
    // inverso:
    // resultado.unshift(resultado[resultado.length-1]);
    // 
  }
  return resultado;
}

module.exports = {
  b08ContarVogais,
  b09InverterTexto,
  b10MaiorNumero,
  b11MenorNumero,
  b12DobrarNumeros,
  b13FiltrarPares,
  b14SomarArray,
  b15EncontrarNome,
  b16TemNegativo,
  b17TodosPositivos,
  b18PrimeiroMaiorQue,
  b19ContarPalavras,
  b20Capitalizar,
  b21RemoverDuplicados,
  b22CriarMapaDePrecos,
  b23PegarValorObjeto,
  b24SomarValoresObjeto,
  b27EhBissexto,
  b30Media,
  b32JuntarNomes,
  b33ContemPropriedade,

  m04OrdenarNumeros,
  m05AgruparPorParidade,
  m06ContarOcorrencias,
  m07ProdutosComDesconto,
  m08TotalCarrinho,
  m09BuscarUsuarioPorEmail,
  m10UsuariosAtivos,
  m11TodosMaioresDeIdade,
  m12AlgumProdutoCaro,
  m13IndexarPorId,
  m14MesclarObjetos,
  m15SelecionarCampos,
  m16OmitirCampos,
  m17AchatarUmaCamada,
  m18Intersecao,
  m19Diferenca,
  m20FrequenciaDeLetras,
  m21Palindromo,
  m26TransporMatriz,
  m27RotacionarArray,
};