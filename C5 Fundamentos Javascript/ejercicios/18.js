
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

function esVocal(letra) {
  // Convertimos la letra a minúscula para una comparación consistente
  letra = letra.toLowerCase();

  // Array que contiene las vocales minúsculas
  const vocales = ["a", "e", "i", "o", "u"];

  // Verificamos si la letra se encuentra en el array de vocales
  if (vocales.includes(letra)) {
    return "Es vocal"; // La letra es una vocal
  } else {
    return "Dato incorrecto"; // La letra no es una vocal o no es un string
  }
}

module.exports = esVocal;
