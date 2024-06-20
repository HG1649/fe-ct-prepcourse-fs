
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  function obtenerDiaSemana(numero) {
    // Array con los nombres de los días de la semana
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  
    // Validamos si el número está dentro del rango válido (1 a 7)
    if (numero < 1 || numero > 7) {
      return "No es un dia de la semana";
    }
  
    // Obtenemos el índice del día correspondiente en el array
    const indiceDia = numero - 1;
  
    // Devolvemos el día de la semana con mayúscula inicial y sin tilde
    return dias[indiceDia].charAt(0).toUpperCase() + dias[indiceDia].slice(1);
  }
  
  module.exports = obtenerDiaSemana;