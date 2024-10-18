function criarAcronimo(frase) {
  const palavras = frase.split(" ");
  let acronimo = "";

  for (let palavra of palavras) {
    if (palavra.length > 4) {
      acronimo += palavra[0].toUpperCase();
    }
  }
  return acronimo;
}

const fraseExemplo = "Central de Processamento de Dados";
console.log(criarAcronimo(fraseExemplo));
