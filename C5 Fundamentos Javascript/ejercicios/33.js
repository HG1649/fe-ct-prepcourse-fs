// ⛔️ Recuerda que debes utilizar el objeto global "Math".

  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:

  function elevar(num, exponent) {
    // Verificar si los argumentos son números
    if (typeof num !== "number" || typeof exponent !== "number") {
      throw new Error("Los argumentos deben ser números");
    }
  
    // Elevación utilizando Math.pow()
    const resultado = Math.pow(num, exponent);
  
    // Retornar el valor elevado
    return resultado;
  }
  
  module.exports = elevar;
