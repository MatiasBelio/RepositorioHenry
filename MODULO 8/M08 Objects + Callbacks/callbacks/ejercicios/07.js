function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

var arrayNuevo = arrayOfStrings.filter(function(strings){
  if (strings.startsWith("a")) return strings;
})
return arrayNuevo;
}

module.exports = filter;
