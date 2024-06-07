// ⛔️ Recuerda que debes utilizar el objeto global "Math".


  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  function elevarAlCuadrado(num) {
    // Verificar si el argumento es un número
    if (typeof num !== "number") {
      throw new Error("El argumento debe ser un número");
    }
  
    // Elevar al cuadrado utilizando Math.pow()
    const resultado = Math.pow(num, 2);
  
    // Retornar el valor elevado al cuadrado
    return resultado;
  }
  
  module.exports = elevarAlCuadrado;
