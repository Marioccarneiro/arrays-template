// // PRATICA GUIADA

// // PRATICA GUIADA 1

// // Crie um array com 3 itens do tipo String
// // Crie um array com 3 itens do tipo Number
// // Crie um array com uma String, um número e um booleano;
// // Crie um array com apenas um valor. Um número.
// // Crie um array sem nenhum valor dentro.

// const minhasStrings = [`copo` , `plantinha` , `vinho`]
// const meusNumeros = [1, 2, 3]
// const minhaListaDeVariasCoisas = [`Sheilinha` , 1 , true]
// const meuNumeroSolitario = [456]
// const semValor = []

// // PRATICA GUIADA 2

// // Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
// // Verifique se o terceiro array inclui cada um dos itens;
// // No quarto array, imprima o valor do único item. 
// // Observe qual o seu índice, e imprima seu tamanho.

// const tamanhoMinhasStrings = minhasStrings.length
// console.log(`tamanho da array` , tamanhoMinhasStrings)

// const quartoElementoMinhasStrings = minhasStrings[4]
// console.log(`Valor que esta na posicao dois do array minhasSrings` , quartoElementoMinhasStrings)

// const temSheilinha = minhaListaDeVariasCoisas.includes(`Sheilinha`)
// console.log(`minhaListaDeVariasCoisas tem 'Sheilinha'?`, temSheilinha)

// const temDois = minhaListaDeVariasCoisas.includes(1)
// console.log(`minha listaDeVariasCoisas tem '1'?` , temDois)

// const temTrue = minhaListaDeVariasCoisas.includes(true)
// console.log(`minha listaDeVariasCoisas tem 'true'?` , temTrue)

// const valorItemUnico = meuNumeroSolitario[0]
// console.log(`Qual o valor do meu 'meu numero solitario'?` , valorItemUnico)

// const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
// console.log(`Qual o tamano da lista meuNumeroSolitario?` , tamanhoMeuNumeroSolitario)

// // Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
// // Faça push() de uma nova string no array copiado
// // Imprima os dois arrays. Há diferença?
// // Como podemos resolver isso?
// // Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
// // Imprima novamente ambos os arrays

// const minhasStringsCopiaErrada = minhasStrings

// minhasStringsCopiaErrada.push(`livro`)

// console.log(`Array original` , minhasStrings)
// console.log(`Array copia errada` , minhasStringsCopiaErrada)

// const minhasStringsCopiaCerta = minhasStrings.slice()
// console.log(`Array copia certa` , minhasStringsCopiaCerta)

// minhasStringsCopiaCerta.splice(2, 1)

// console.log(`Array original:` , minhasStrings)
// console.log(`Copia certa pos slice():` , minhasStringsCopiaCerta)

// Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

// Depois disso, crie uma cópia deste array utilizando o método slice().

// No array copiado: 
// Remova o último item 
// Adicione o número 6 no fim do array
// Remova o número que está no índice 2 do array
// Por fim, imprima os dois arrays

let numeros = [1, 4, 9, 6, 2]

let copiaNumeros = numeros.slice()

copiaNumeros.splice(4, 1)

copiaNumeros.push(6)

copiaNumeros.splice(2, 1)

console.log(`Array inicial` , numeros)
console.log(`Array modificado` , copiaNumeros)
