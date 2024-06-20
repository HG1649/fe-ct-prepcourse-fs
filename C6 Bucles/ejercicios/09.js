
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código

  function conection(status) {
    // Definimos las variables para los estados
    const ONLINE = 1;
    const AWAY = 2;
    const OFFLINE = 0;
  
    // Evaluamos el estado de conexión
    switch (status) {
      case ONLINE:
        return "Online";
      case AWAY:
        return "Away";
      default:
        return "Offline";
    }
  }
  
  module.exports = conection;
