function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = arrayOfNums.reduce((acum, numero) => {return acum + numero;} );
    return suma;
}

module.exports = agregarNumeros;
