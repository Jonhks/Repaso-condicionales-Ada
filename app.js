// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

                          //12,  false
// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//   return edad >= 15 || tieneAutorizacion === true
// };

// // const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion === true;

// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true)) // true


// otra forma

// const edad = parseInt(prompt('Dime la edad'));
// const tieneAutorizacion = prompt('Dime si tiene permiso (si/no)').toUpperCase();

// // const tieneAutorizacion = confirm('¿Tiene autorizacion?');
// // console.log(tieneAutorizacion);

//                              //12,  false
// // const puedeVerPelicula = (edad, tieneAutorizacion) => {
// //   return edad >= 15 || tieneAutorizacion === true
// // };

// const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion === 'SI';

//console.log(puedeVerPelicula(edad, tieneAutorizacion));


// Ejercicio 5 forma 1
// esConsonante
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// /^[aAeEiIoOuU]$/
// const vocales = /^[aAeEiIoOuU]$/;
// const esVocal = (letra) => !vocales.test(letra);
// console.log(esVocal('a'));

// /^[aeiou]$/i
// const vocales = /^[aeiou]$/i;
// const esVocal = (letra) => !vocales.test(letra);
// console.log(esVocal('p'));

// /^[aeiou]$/gi
// const vocales = /^[aeiou]$/gi;
// const esVocal = (letra) => !vocales.test(letra);
// console.log(esVocal('9'));

// const vocales = /^[aeiou0-9._-]$/gi;
// const esVocal = (letra) => !vocales.test(letra);
// console.log(esVocal('p'));

// Buscar las vocales y decirle que false


// solucion 1
// const esVocal = letra => {
//   if(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u'){
//     return false;
//   } else {
//     return true;
//   }
// };


// Opcion 2
// const esVocal = letra => {  
//   let result = false;
//   if(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u'){
//     result = true;
//   } else {
//     result = false;
//   }
//   return !result;
// };
// console.log(esVocal('o'));


// solucion 3
// const esVocal = letra => !(letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o'|| letra === 'u');
  

// console.log(esVocal('a'));

// const jugarPiedraPapelTijera = (a , b) =>{
//   if ((a === 'piedra' || a === 'tijera' || a === 'papel') && (b === 'piedra' || b === 'tijera' || b === 'papel')){
//       if (a === 'piedra' && b === 'papel' || a === 'papel' && b === 'piedra'){
//       return '¡Ganó papel!'
//       } else if (a === 'tijera' && b === 'papel' || a === 'papel' && b === 'tijera') {
//           return '¡Ganó tijera!'
//       } else if (a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra'){
//           return '¡Ganó piedra!'
//       } else {
//           return '¡Esto es un empate!'
//   }
//   } else {     
//       return 'No sabe jugar'
//   }
// };



// console.log(jugarPiedraPapelTijera('papel', 'piedra'));
// console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
// console.log(jugarPiedraPapelTijera('tijera', 'papel'));
// console.log(jugarPiedraPapelTijera('papel', 'loro'));
