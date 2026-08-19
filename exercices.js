function b08ContarVogais(frase) {
  //let array = [...frase]; //frase.split('');
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;
  for(let i = 0; i<frase.length; i++){
    if(vogais.includes(frase.charAt(i).toLowerCase())){contador++;}
  }
  return contador;
}

function b09InverterTexto(texto) {
  return texto.split('').reverse().join('');  
}

function b10MaiorNumero(array) {
  return array.reduce( (maior, atual) => atual>maior?atual:maior);
}

function b11MenorNumero(array) {
  return array.reduce( (menor, atual) => atual<menor?atual:menor);
}

function b12DobrarNumeros(array) {
  return array.map(item => item*2);
}

function b13FiltrarPares(array) {
  return array.filter(item => item%2==0);
}

function b14SomarArray(array) {
  return array.reduce( (soma, atual) => soma+atual, 0 );
}

function b15EncontrarNome(array, busca) {
  return array.find( item => item == busca);
}

function b16TemNegativo(array) {
  return array.some( item => item<0 );
}

function b17TodosPositivos(array) {
  return array.every( item => item>0 );
}

function b18PrimeiroMaiorQue(array, limite) {
  return array.find( item => item>limite );
}

function b19ContarPalavras(frase) {
  return frase.trim().split(/\s+/).length;
}

function b20Capitalizar(frase) {
  //return frase.split('')[0].toUpperCase() + frase.slice(1);
  //return frase.slice(0)[0].toUpperCase() + frase.slice(1);
  return frase.charAt(0).toUpperCase() + frase.slice(1);
}

function b21RemoverDuplicados(array){
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
  let soma = 0;
  for (const chave in objeto) {    
    if (typeof objeto[chave] === "number"){
      soma+=objeto[chave];
    }
  }
  return soma;
}

function b27EhBissexto(ano) {
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
}

function b30Media(lista) {
  return lista.reduce( (soma, item) => soma+item )/lista.length;
}

function b32JuntarNomes(lista) {
  return lista.join(', ');
}

function b33ContemPropriedade(objeto, propriedade) {
  return !(objeto[propriedade] === undefined);
}

function m04OrdenarNumeros(lista) {
  const copia = [...lista];
  for(let i=0; i<copia.length-1; i++){
    for(let j=i+1; j<copia.length; j++){
      if(copia[i]>copia[j]){
        let temp = copia[j];
        copia[j] = copia[i];
        copia[i] = temp;
      }
    }  
  }
  return copia;
}

function m05AgruparPorParidade(lista) {
  // let pares = [];
  // let impares = [];
  // 
  // for(let i=0; i<lista.length; i++){
  //   if(lista[i]%2==0){pares.push(lista[i]);}
  //   else{impares.push(lista[i]);}
  // }
  // 
  // return {
  //   pares: pares,
  //   impares: impares
  // }
  let pares = [...lista.filter( item => item%2==0 )];
  let impares = [...lista.filter( item => item%2!=0 )];
  return {
    pares: pares,
    impares: impares
  };
}

function m06ContarOcorrencias(lista, valor) {
  const contagem = {};

  for (let item of lista) {
    if (contagem[item]) {
      contagem[item]++;
    } else {
      contagem[item] = 1;
    }
  }

  return contagem;
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

// push
// pop
// shift
// unshift

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
