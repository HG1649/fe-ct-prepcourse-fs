// ⛔️ Recuerda que debes utilizar el objeto global "Math".

  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:

  function elevarAlCubo(num) {
    // Verificar si el argumento es un número
    if (typeof num !== "number") {
      throw new Error("El argumento debe ser un número");
    }
  
    // Elevación al cubo utilizando Math.pow()
    const resultado = Math.pow(num, 3);
  
    // Retornar el valor elevado al cubo
    return resultado;
  }
  
  module.exports = elevarAlCubo;

