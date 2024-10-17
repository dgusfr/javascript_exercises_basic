function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

const numero = 5;
const resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);
