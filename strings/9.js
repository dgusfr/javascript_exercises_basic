function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

const frase = "o rato roeu a roupa do rei de roma";
console.log(capitalizeWords(frase));
