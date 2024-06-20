
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  const funcionFizzBuzzImportada = require('./fizzBuzz'); // Importar la función

  test('Debe retornar "fizzbuzz" si num es divisible por 3 y 5', function () {
    expect(funcionFizzBuzzImportada(15)).toBe('fizzbuzz');
  });