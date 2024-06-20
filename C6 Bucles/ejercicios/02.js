
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  
function esVerdaderoYFalso(booleano1, booleano2) { // Función que recibe dos argumentos booleanos: "booleano1" y "booleano2"
  return booleano1 && booleano2; // Retorna "true" si ambos argumentos son "true", y "false" en cualquier otro caso
}

module.exports = esVerdaderoYFalso; // Exporta la función "esVerdaderoYFalso" para que pueda ser utilizada en otros módulos