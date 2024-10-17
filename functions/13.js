function calcularMediaPonderada(numeros, pesos) {
  if (
    numeros.length === 0 ||
    pesos.length === 0 ||
    numeros.length !== pesos.length
  ) {
    return 0;
  }

  let somaProdutos = 0;
  let somaPesos = 0;

  for (let i = 0; i < numeros.length; i++) {
    somaProdutos += numeros[i] * pesos[i];
    somaPesos += pesos[i];
  }

  return somaProdutos / somaPesos;
}

const numeros = [5, 7, 9];
const pesos = [2, 3, 1];
const mediaPonderada = calcularMediaPonderada(numeros, pesos);
console.log(`A média ponderada dos números é: ${mediaPonderada.toFixed(2)}`);
