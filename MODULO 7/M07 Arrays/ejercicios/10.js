function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {return 0;}
  for (var i = 0; i < array.length; i++){
      var numMax = array.reduce((a, b) => Math.max(a, b));
      if (array[i] === numMax) return i;
    }
    
  } 
  


module.exports = encontrarIndiceMayor;
