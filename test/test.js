const expect = require('chai').expect
const mjs = require('..').default

describe('#mjs', function() {
  it('Si la palabra termina en "ar", se le quitan dos caracteres', function() {
    const translation = mjs("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
    const translation = mjs("Zorro")
    const translation2 = mjs("Zarpar")
    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión medio', function() {
    const translation = mjs("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve intercalando mayus y minus', function() {
    const translation = mjs("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
