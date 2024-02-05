// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: "prop1",
    propiedad2: "prop2",
    propiedad3: {
        propiedad4: "prop4",
        propiedad5: "prop5",
        propiedad6: {
            
            propiedad9: function(){
            return "valor7";            }
        }
    }
    
};

module.exports = objetoAnidado;