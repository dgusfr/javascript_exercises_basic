function removerCaracteresEspeciais(string) {
  string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return string.replace(/[^\w\s]/gi, "");
}

const stringComEspeciais =
  "Olá, mundo! Este é um exemplo de string com caracteres especiais.";
console.log(removerCaracteresEspeciais(stringComEspeciais)); //
