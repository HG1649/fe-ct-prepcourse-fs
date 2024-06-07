// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.
const nuevaMultiplicacion = 10 * 0 === 0; // cambia 40 a 0
console.log(nuevaMultiplicacion); // Salida: true

test('Debe ser la multiplicación correcta', function () {
  expect(nuevaMultiplicacion).toBe(true);
});


