// La función recibe un argumento "valor".
// Si este valor es null o undefined, retorna true.
// De lo contrario, retorna false.
// Tu código:
// function esNuloOIndefinido(valor) {
// }
function esNuloOIndefinido(valor) {
  return valor === null || valor === undefined;
}

module.exports = esNuloOIndefinido;