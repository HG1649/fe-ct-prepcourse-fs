
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:

  function obtenerResto(x, y) {
    // Se verifica si el divisor (y) es igual a 0
    if (y === 0) {
      throw new Error("No se puede obtener el resto de una división por 0"); // Se lanza un error
    }
  
    // Se realiza la operación para obtener el resto de la división
    const resultado = x % y;
  
    // Se retorna el valor del resto
    return resultado;
  }
  
  module.exports = obtenerResto;

