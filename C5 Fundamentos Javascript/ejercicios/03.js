// Crea una variable de tipo boolean.
let nuevoBoolean = null;

// Reemplaza el valor de null por el correspondiente.
if (nuevoBoolean === null) {
  nuevoBoolean = false; // Valor por defecto para booleanos
}

console.log(nuevoBoolean); // Imprime el valor de la variable

// Exporta la variable para su uso en otros módulos.
module.exports = nuevoBoolean;
