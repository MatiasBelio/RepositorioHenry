function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var nuevoArray = array.filter( (Number) => Number > 10);
  return nuevoArray.length;
}

module.exports = contarElementosMayoresA10;
