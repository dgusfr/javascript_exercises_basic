function encontrarMaiorNumero(lista) {
  let maior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }

  return maior;
}

const numeros = [10, 5, 38, 20, 3];
const maiorNumero = encontrarMaiorNumero(numeros);
console.log(`O maior número da lista é: ${maiorNumero}`);
