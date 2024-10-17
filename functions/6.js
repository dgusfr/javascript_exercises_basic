function calcularMDC(numero1, numero2) {
  if (numero2 === 0) {
    return numero1;
  }

  while (numero2 !== 0) {
    let temp = numero2;
    numero2 = numero1 % numero2;
    numero1 = temp;
  }

  return numero1;
}

const num1 = 24;
const num2 = 36;
const mdc = calcularMDC(num1, num2);
console.log(`O Maximo dividor comum (MDC) de ${num1} e ${num2} é: ${mdc}`);
