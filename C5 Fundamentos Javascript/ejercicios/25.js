// La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
// Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
// Por ejemplo:
// "Soy", "Henry" ---> "Soy Henry"
// Tu código:

function combinarNombres(nombre, apellido) {
  // Se verifica si los argumentos son de tipo string
  if (typeof nombre !== "string" || typeof apellido !== "string") {
    return "Los argumentos deben ser strings";
  }

  // Se combinan los nombres separados por un espacio
  const nombreCompleto = nombre + " " + apellido;

  // Se retorna el nombre completo
  return nombreCompleto;
}

module.exports = combinarNombres;
