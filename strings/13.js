function contarOcorrencias(string, letra) {
  letra = letra.toLowerCase();
  let contador = 0;

  for (let i = 0; i < string.length; i++) {
    const caractereAtual = string[i].toLowerCase();
    if (caractereAtual === letra) {
      contador++;
    }
  }
  return contador;
}

const string = "Olá, mundo! Esta é uma string de exemplo.";
const letra = "o";
console.log(contarOcorrencias(string, letra));

//**************************UTILIZANDO EXPRESSÕES REGULARES**************************

function contaOcorrenciasRegular(string, letra) {
  const ocorrencias = string.match(new RegExp(letra, "gi"));
  return ocorrencias ? ocorrencias.length : 0;
}

const stringExemplo = "Olá, mundo! Esta é uma string de exemplo.";
const letraExemplo = "o";
console.log(contaOcorrenciasRegular(stringExemplo, letraExemplo));
