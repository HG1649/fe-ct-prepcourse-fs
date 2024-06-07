
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  function mayorQueCincuenta(num) {
    // Verificamos si el número es mayor que 50
    if (num > 50) {
      return true; // El número es mayor que 50
    } else {
      return false; // El número es menor o igual que 50
    }
  }
  
  module.exports = mayorQueCincuenta;

