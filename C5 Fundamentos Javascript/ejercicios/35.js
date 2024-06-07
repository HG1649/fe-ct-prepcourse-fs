// ⛔️ Recuerda que debes utilizar el objeto global "Math".


  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  function redondearHaciaArriba(num) {
    // Verificar si el argumento es un número
    if (typeof num !== "number") {
      throw new Error("El argumento debe ser un número");
    }
  
    // Redondear hacia arriba utilizando Math.ceil()
    const resultado = Math.ceil(num);
  
    // Retornar el número redondeado hacia arriba
    return resultado;
  }
  
  module.exports = redondearHaciaArriba;