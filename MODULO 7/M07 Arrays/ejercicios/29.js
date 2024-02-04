function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
for (let i = 0; i < numeros.length - 1; i++) {
  if(numeros.length === 0) return null;
  let numSig = numeros[i] + 1;
  if (numeros[i + 1] != numSig){
    return numSig;
  }
}
  return null; 
}

module.exports = encontrarNumeroFaltante;