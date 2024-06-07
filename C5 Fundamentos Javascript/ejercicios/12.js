
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:

  function tienenMismaLongitud(str1, str2) {
    // Verificamos la longitud de ambos strings
    const longitudStr1 = str1.length;
    const longitudStr2 = str2.length;
  
    // Comparamos las longitudes
    if (longitudStr1 === longitudStr2) {
      return true; // Los strings tienen la misma longitud
    } else {
      return false; // Los strings tienen diferente longitud
    }
  }
  
  module.exports = tienenMismaLongitud;

  
