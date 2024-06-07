
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:

   function retornarPerimetro(lado) {
      // Verificar si el argumento es un número
      if (typeof lado !== "number") {
        throw new Error("El argumento debe ser un número");
      }
    
      // Calcular el perímetro del cuadrado
      const perimetro = 4 * lado;
    
      // Verificar si el perímetro es válido (no negativo)
      if (perimetro < 0) {
        throw new Error("El lado no puede ser negativo");
      }
    
      // Retornar el perímetro del cuadrado
      return perimetro;
    }
    
    module.exports = retornarPerimetro;

