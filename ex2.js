// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

(edad < 18) ? puedesPasar = false : "";

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
// Se estaba creando una variable nueva con el mismo nombre "puedesPasar" pero en el contexto del condicional, por lo que se creaba dentro como false pero no salia de ahi.