
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:

  function divide(x, y) {
    // Se verifica si el divisor (y) es igual a 0
    if (y === 0) {
      throw new Error("No se puede dividir por 0"); // Se lanza un error
    }
  
    // Se realiza la división de los argumentos 'x' e 'y'
    const resultado = x / y;
  
    // Se retorna el valor de la división
    return resultado;
  }
  
  module.exports = divide;
