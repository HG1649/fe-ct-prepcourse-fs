
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:

  function menosQueNoventa(num) {
    // Verificamos si el número es menor que 90
    if (num < 90) {
      return true; // El número es menor que 90
    } else {
      return false; // El número es mayor o igual que 90
    }
  }
  
  module.exports = menosQueNoventa;

