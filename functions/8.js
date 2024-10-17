function calcularPerimetroQuadrado(comprimentoLado) {
  return 4 * comprimentoLado;
}

const lado = 5;
const perimetro = calcularPerimetroQuadrado(lado);
console.log(
  `O perímetro do quadrado com lado de comprimento ${lado} é: ${perimetro}`
);
