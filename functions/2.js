function verificaPrimo(numero) {
  let primo = true;
  if (numero <= 1) {
    primo = false;
  } else {
    for (let i = 2; i < -Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
  }
  if (primo) {
    console.log("O número é primo!");
  } else {
    console.log("O número não é primo!");
  }
}

verificaPrimo(20);
verificaPrimo(17);
