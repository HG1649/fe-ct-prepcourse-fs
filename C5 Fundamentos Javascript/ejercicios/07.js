
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

  function esTipoDato(valor) {
    if (Array.isArray(valor)) {
      return "array";
    }
    return typeof valor;
  }
  
  module.exports = esTipoDato;




  test('El tipo de dato ( typeof ) de "[]" debe retornar "object"', () => {
     expect(esTipoDato([])).toBe('object');
  });

  test('El tipo de dato ( typeof ) de "null" debe retornar "object"', () => {

  })
