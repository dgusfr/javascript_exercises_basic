function contemApenasMinusculas(string) {
  let contemMaiuscula = false;
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      contemMaiuscula = true;
      break;
    }
  }
  if (contemMaiuscula) {
    console.log("A string contém letras MAIUSCULAS.");
  } else {
    console.log("A string contém APENAS letras MINUSCULAS.");
  }
}

const string1 = "TRÊS pratos De TRIGO Para três Tigres Tristes.";
const string2 = "Três pratos de trigo para três tigres tristes.";

contemApenasMinusculas(string1);
contemApenasMinusculas(string2);

//**************************UTILIZANDO EXPRESSÕES REGULARES**************************
function VerificaMinusculas(string) {
  if (/^[a-z]+$/.test(string)) {
    console.log("A string contém APENAS letras MINUSCULAS.");
  } else {
    console.log("A string contém letras MAIUSCULAS.");
  }
}

const letras1 = "abcdef";
const letras2 = "Abcdef";

VerificaMinusculas(letras1);
VerificaMinusculas(letras2);
