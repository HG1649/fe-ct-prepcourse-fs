
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  function obtenerMayor(x, y) {

    if (x > y) {
      return x;
    } else if (x < y) {
      return y;
    } else {
      return x; // En caso de que sean iguales, retorna cualquiera de los dos
    }
  }
  
 


module.exports = obtenerMayor;
