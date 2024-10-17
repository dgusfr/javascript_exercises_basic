let numero = parseInt(prompt("Digite um número:"));

if (!isNaN(numero)) {
  document.write("<h2>Tabuada do " + numero + ":</h2>");

  for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + numero * i + "<br>");
  }
} else {
  document.write("<p>Por favor, insira um número válido.</p>");
}
