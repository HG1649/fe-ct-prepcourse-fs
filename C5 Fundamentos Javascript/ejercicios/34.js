// ⛔️ Recuerda que debes utilizar el objeto global "Math".

   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
   function redondearNumero(num) {
      // Verificar si el argumento es un número
      if (typeof num !== "number") {
        throw new Error("El argumento debe ser un número");
      }
    
      // Redondear utilizando Math.round()
      const resultado = Math.round(num);
    
      // Retornar el número redondeado
      return resultado;
    }
    
    module.exports = redondearNumero;
