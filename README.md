# Extra: Anagramas Parte 1

## Introdução

Nessa entrega vamos trabalhar com anagramas, que são palavras formadas
pelas mesmas letras, porém, com uma ordem diferente, o objetivo geral
dessa tarefa é executar o código de forma performática, ou seja, sem
travar sua página.

Você foi contratado para desenvolver o front-end da página, que deve
receber uma palavra do usuario e devolver todos os anagramas daquela
palavra, então seu primeiro passo é clonar esse
[repositório](https://classroom.github.com/a/HNBovtGW) que já foi
iniciado por um desenvolvedor de sua equipe.

## Tarefa

### 1- Preparando seu Repositório

Crie um novo **diretório** chamado `anagrams1` para este projeto. Crie
um arquivo `index.html` e um arquivo `anagrams1.js`.

Vamos utilizar um dicionário de palavras em forma de array, que esta
disponível nesse
[Link](https://files-kenzie-academy-brasil.s3.us-east-1.amazonaws.com/words-pt-br.js)
**(MAS NÃO CLIQUE NELE AINDA)**. Clique com o botão direito sobre o
link, escolha `"Save link as..."` ou `"Salvar link como"` e aí sim
salve-o em seu diretório `anagrams1` como um novo arquivo chamado
`palavras.js` que você salvará em sua pasta de projetos.

**Aviso!**

**É importante seguir as instruções dos nomes dos arquivos para que os
testes funcionem.**

### 2- Preparando seu HTML

Você precisará incluir os arquivos `palavras.js` e `anagramas1.js` como
scripts na sua página **HTML**. Adicione em seu arquivo **HTML** as
seguintes tags de script para eles:

    <script type="text/javascript" src="palavras.js"></script>
    <script type="text/javascript" src="anagrams1.js"></script>

Em seguida, você precisará de um modo que o usuário possa inserir o
texto. O seguinte trecho de **HTML** define uma caixa de texto e um
botão:

    <div>
        <input type="text" id="input" size="40" />
        <button id="findButton">Encontrar Anagramas</button>
    </div>

Isoladamente, seu botão ainda não faz nada, mas nós já vamos chegar
nessa parte.

### 3- Preparando seu Script

Você irá implementar uma função chamada `getAnagramsOf(input)` que pega
um valor de entrada de texto de um campo de entrada em seu **html**, e
retorna um array dos anagramas contidos no texto inserido. Por exemplo,
a palavra **"ator"** digitada na caixa de texto deve retornar um array
similar a `["ator", "rato", "tora", "rota"]`.

Você irá atribuir uma função de **handler de clique** que será executada
quando o botão for clicado:

    const button = document.getElementById("findButton");
    button.addEventListener("click", function () {
    // seu código vai aqui
    });

Dentro da função handler de clique, você precisará de um modo de acessar
o conteúdo digitado na caixa de texto quando o botão for clicado. Então
você pode passar o conteúdo para sua função getAnagramsOf como
argumento:

    button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
    });

Para detectar os anagramas você precisa de um modo de testar se duas
strings contém as mesmas letras em ordem diferente.

Considere o efeito de ordenar as letras alfabeticamente. Isso coloca as
letras na ordem padrão, independentemente de como elas são originalmente
ordenadas nas palavras. Aqui há uma função que você pode usar para
realizar isso:

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

Veja o efeito de aplicar a função alphabetize a algumas palavras:

    alphabetize("ator") retorna "aort"

    alphabetize("rota") retorna "aort"

    alphabetize("tora") retorna "aort"

    alphabetize("rato") retorna "aort"

    alphabetize("sapo") retorna "aops"

    alphabetize("sopa") retorna "aops"

As formas ordenadas alfabeticamente são as mesmas para cada palavra em
um conjunto de anagramas. Tanto "sapo" quanto "sopa" formam "aops"
quando são ordenadas alfabeticamente. Similarmente, "ator", "rota" e
"tora" ficam iguais quando são ordenadas alfabeticamente. Portanto, você
pode usar esta função `alphabetize()` para ajudá-lo a determinar se duas
palavras são anagramas.

Depois de obter seu array de resultados, em sua função, crie um novo
Elemento e defina seu `textContent =` seu array de resultados. Em
seguida, use `document.body.appendChild()` para adicionar seu novo
elemento à página. Por último, use `return` para retornar o array de
resultados.

![](https://camo.githubusercontent.com/e3f58cbfe0692efe51f289c9886a83b012e0a14c4ed757cdd4a5a53b96e00393/68747470733a2f2f692e736e61672e67792f6e4a564e30772e6a7067)

Exemplo do resultado esperado.

**Aviso!**

**No repositório existe um arquivo chamado `words.js` que contém
relativamente menos palavras que o arquivo de dicionário, podendo ser
utilizado para fazer testes antes de ser utilizado o dicionario
completo, porém, o que sera avaliado será o arquivo `palavras.js`.**

### 4- Envio

Faça o push do código para o seu repositório GitHub, altere a
visibilidade do repositório para internal e implemente-o GitHub pages.
No Canvas, por favor, envie sua url do GitHub Pages:
(ex:https://nomerandomico.pages.github.io/) e envie o link do seu
repositório nos comentários. Atenção, seu repositório deverá ser
compartilhado apenas com a organização. (Internal)
