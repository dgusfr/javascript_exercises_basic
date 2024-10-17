function calcularMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }

  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  return soma / lista.length;
}

const numeros = [10, 5, 8, 20, 3];
const media = calcularMedia(numeros);
console.log(`A média dos números é: ${media}`);
