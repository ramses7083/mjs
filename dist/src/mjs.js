'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mjs;
function mjs(str) {
  var translation = str;

  // Si la palabra termina en "ar", se le quitan dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); // Deja desde el 0 hasta 2 caracteres antes del final
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  // Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve intercalando mayus y minus.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}