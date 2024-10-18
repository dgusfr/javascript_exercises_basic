function inverterPalavras(frase) {
  const palavras = frase.split(" ");
  const palavrasInvertidas = palavras.reverse();

  return palavrasInvertidas.join(" ");
}

const fraseExemplo = "Olá, mundo! Esta é uma frase de exemplo.";
console.log(inverterPalavras(fraseExemplo));
