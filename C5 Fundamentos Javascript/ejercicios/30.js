
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:

  function deEuroAdolar(euro) {
  // Verificar si el argumento es un número
  if (typeof euro !== "number") {
    throw new Error("El argumento debe ser un número");
  }

  // Tasa de cambio de euro a dólar
  const tasaCambio = 1.20;

  // Cálculo del valor en dólares
  const dolares = euro * tasaCambio;

  // Retornar el valor en dólares
  return dolares;
}


