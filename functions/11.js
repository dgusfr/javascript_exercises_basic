function calcularMDC(numero1, numero2) {
  while (numero2 !== 0) {
    let temp = numero2;
    numero2 = numero1 % numero2;
    numero1 = temp;
  }
  return numero1;
}

function calcularMMC(numero1, numero2) {
  return (numero1 * numero2) / calcularMDC(numero1, numero2);
}

const num1 = 12;
const num2 = 15;
const mmc = calcularMMC(num1, num2);
console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`);
