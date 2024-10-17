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

// Com numero = 5 e fatorial = 1.

// 1ª iteração (i = 2) e (fatorial=1)
// fatorial *= i -> fatorial = 1 * 2 = 2.

// 2ª iteração (i = 3) e (fatorial=2)
// fatorial *= i -> fatorial = 2 * 3 = 6.

// 3ª iteração (i = 4) e (fatorial=6)
// fatorial *= i -> fatorial = 6 * 4 = 24.

// 4ª iteração (i = 5) e (fatorial=24)
// fatorial *= i -> fatorial = 24 * 5 = 120.
