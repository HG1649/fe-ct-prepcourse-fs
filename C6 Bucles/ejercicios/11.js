
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:

  function estaEnRango(num) {
    // Verificar si el número está entre 20 y 50 (exclusive)
    return num > 20 && num < 50;
  }
  
  module.exports = estaEnRango;