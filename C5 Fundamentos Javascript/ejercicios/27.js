
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:

  function obtenerAreaRectangulo(alto, ancho) {
    // Verificar si los argumentos son números
    if (typeof alto !== "number" || typeof ancho !== "number") {
      throw new Error("Los argumentos deben ser números");
    }
  
    // Calcular el área del rectángulo
    const area = alto * ancho;
  
    // Verificar si el área es válida (no negativa)
    if (area < 0) {
      throw new Error("El área no puede ser negativa");
    }
  
    // Retornar el área del rectángulo
    return area;
  }
  
  module.exports = obtenerAreaRectangulo;



