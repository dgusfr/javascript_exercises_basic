function capitalizaString(string) {
  const palavras = string.split(" ");

  for (let i = 0; i < palavras.length; i++) {
    const primeiraLetra = palavras[i].charAt(0).toUpperCase();
    palavras[i] = primeiraLetra + palavras[i].slice(1);
  }

  return palavras.join(" ");
}

const stringExemplo = "olá, mundo! esta é uma string de exemplo.";
console.log(capitalizaString(stringExemplo));
