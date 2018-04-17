# mjs

mjs es un idioma utilizado en [js](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan dos caracteres.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión medio.
- Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve intercalando mayúsculas y minúsculas.


## Instalación

```
npm install mjs
```

## Uso

```
import mjs from 'mjs'

mjs("Programar") // Program

mjs("programar") // Program
mjs("Zorro") // Zorro
mjs("Zarpar") // Zarppe
mjs("abecedario") // abece-dario
mjs("sometemos") // SoMeTeMoS
```
## Créditos
- [Ramses7083](https://twitter.com/ramses7083)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
