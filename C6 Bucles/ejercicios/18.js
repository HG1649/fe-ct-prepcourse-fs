
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  function productoEntreNúmeros(a, b) {
    let producto = 1;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      producto *= i;
    }
    return producto;
  }
  
  module.exports = productoEntreNúmeros;