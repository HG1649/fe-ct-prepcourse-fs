
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  function esEntero(num) {
    // Utilizar el operador módulo (%) para verificar si el residuo de la división entre num y 1 es igual a 0
    return num % 1 === 0;
  }
  
  module.exports = esEntero;
