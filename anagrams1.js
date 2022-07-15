const palavraDigitada = document.querySelector("input");
const buscarAnagrama = document.querySelector("button");
const lista = document.querySelector("ul");
const erro = document.querySelector(".erro");
const resultado = document.querySelector(".resultado");

buscarAnagrama.addEventListener("click", function () {
  lista.innerHTML = "";
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (palavras.includes(palavraDigitada.value.toLowerCase())) {
    let arrPalavras = buscarAnagramas(palavraDigitada.value, palavras);
    listarAnagramas(arrPalavras);
  } else {
    listarErro();
  }
});

function alfabetizar(palavra) {
  let alfabetizada = palavra.toLowerCase().split("").sort().join("").trim("");

  return alfabetizada;
}

function buscarAnagramas(palavra, palavras) {
  let anagramas = [];
  let primeira = alfabetizar(palavra);

  for (let i = 0; i < palavras.length; i++) {
    let segunda = alfabetizar(palavras[i]);

    if (primeira === segunda) {
      if (palavra !== palavras[i]) {
        anagramas.push(palavras[i]);
      }
    }
  }
  return anagramas;
}

function listarAnagramas(palavras) {
  let imagem = document.createElement("img");
  let frase = document.createElement("span");

  if (palavras.length == 0) {
    imagem.src = img5;
    frase.innerText = "Infelizmente essa palvra não possui anagramas.";
    resultado.append(frase, imagem);
  } else {
    imagem.src = img4;
    frase.innerText = "Foram encontrados os anagramas:";
    resultado.append(frase, imagem);
    for (let i = 0; i < palavras.length; i++) {
      let itemLista = document.createElement("li");
      itemLista.innerText = palavras[i];
      lista.append(itemLista);
    }
  }
}

function listarErro() {
  let numImagem = Math.round(Math.random() * 3);
  let imagem = document.createElement("img");
  let mensagem = document.createElement("span");
  if (numImagem === 0) {
    mensagem.innerText =
      "Não encontramos sua palavra..." + "\n" + "Poderia digitar novamente?";
    imagem.src = img1;
  } else if (numImagem === 1) {
    mensagem.innerText =
      "Ops!" +
      "\n" +
      "Essa palavra é em português, mesmo?" +
      "\n" +
      "Digite a palavra novamente.";
    imagem.src = img2;
  } else {
    mensagem.innerText =
      "Que palavra é essa?" +
      "\n" +
      "Tem certeza que digitou certo?" +
      "\n" +
      "Digite novamente.";
    imagem.src = img3;
  }

  erro.append(mensagem, imagem);
}
