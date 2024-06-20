function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  return num ===10 || num === 5;

}

module.exports = esDiezOCinco;

console.log(esDiezOCinco(10)); // true
console.log(esDiezOCinco(5)); // true
console.log(esDiezOCinco(3)); // false
console.log(esDiezOCinco(20)); // false