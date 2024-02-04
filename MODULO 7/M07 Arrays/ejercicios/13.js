function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce((acum, numero) => {return acum + numero;}, 0);
  var promedio = (suma / resultadosTest.length);
  return promedio;
}



module.exports = promedioResultadosTest;
