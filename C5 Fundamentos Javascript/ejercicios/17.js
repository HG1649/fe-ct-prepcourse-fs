
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  function esPositivo(num) {
    // Verificamos si el número es positivo
    if (num > 0) {
      return "Es positivo"; // El número es positivo
    } else if (num === 0) { // No se considera ni positivo ni negativo
      return false; 
    } else {
      return "Es negativo"; // El número es negativo
    }
  }
  
  module.exports = esPositivo;
