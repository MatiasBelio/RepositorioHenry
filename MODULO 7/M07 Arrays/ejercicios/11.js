function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  if(array.length === 0) {return [];}
  var producto = array.map((elemento, indice) => {return elemento * indice;});
  return producto;

}

module.exports = multiplicarElementosPorIndice;
