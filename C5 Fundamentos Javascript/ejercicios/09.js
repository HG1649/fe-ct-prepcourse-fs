
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  function esNuloOUndefined(valor) {
    return valor == null;
  }
  
  module.exports = esNuloOUndefined;