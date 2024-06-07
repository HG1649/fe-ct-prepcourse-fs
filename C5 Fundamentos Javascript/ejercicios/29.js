
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:

  function areaDelTriangulo(base, altura) {
    // Verificar si los argumentos son números
    if (typeof base !== "number" || typeof altura !== "number") {
      throw new Error("Los argumentos deben ser números");
    }
  
    // Verificar si la base y la altura son positivas
    if (base <= 0 || altura <= 0) {
      throw new Error("La base y la altura deben ser positivas");
    }
  
    // Calcular el área del triángulo
    const area = (base * altura) / 2;
  
    // Retornar el área del triángulo
    return area;
  }
  
  module.exports = areaDelTriangulo;

