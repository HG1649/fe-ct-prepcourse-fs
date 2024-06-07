
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:

  function agregarSimboloExclamacion(str) {
    // Si el string no es de tipo string, se retorna un mensaje de error
    if (typeof str !== "string") {
      return "El argumento debe ser un string";
    }
  
    // Se agrega el símbolo de exclamación al final del string
    const strConExclamacion = str + "!";
  
    // Se retorna el string modificado
    return strConExclamacion;
  }
  
  module.exports = agregarSimboloExclamacion;


