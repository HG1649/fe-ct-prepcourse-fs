
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:

  function esImpar(num) {
    // Verificamos si el residuo de la división por 2 es diferente de 0
    if (num % 2 !== 0) {
      return true; // El número es impar
    } else {
      return false; // El número es par
    }
  }
  
  module.exports = esImpar;
