// Crea una variable de tipo number.
let nuevoNumero = null;
// Reemplaza el valor de null por el correspondiente.
if (nuevoNumero === null) {
    nuevoNumero = 0; // Valor por defecto para número
}
console.log(nuevoNumero); // Imprime el valor de la variable

// Exporta la variable para su uso en otros módulos.
module.exports = nuevoNumero;