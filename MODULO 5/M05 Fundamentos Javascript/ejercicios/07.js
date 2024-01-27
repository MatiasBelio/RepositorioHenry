// La función recibe un argumento "valor".
// Retorna el tipo de dato de este valor.
// Por ejemplo: "string", "number", "boolean", "object", etc.
// Tu código:
// function esTipoDato(valor) {
//   return(valor);
// }
function esTipoDato(valor){
    return typeof(valor);
}

module.exports = esTipoDato;