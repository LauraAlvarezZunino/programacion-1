const botonTirar = document.getElementById("boton-tirar")
const acertasteColor = document.getElementById("acertaste-color")
const acertasteNumero = document.getElementById("acertaste-numero")
const cuadradoNumeroRuleta = document.getElementById("div-color-ruleta")
const inputNumeros = document.getElementById("input-numeros")
const selectColor = document.getElementById("select-color")
const numeroRuleta = document.getElementById("numero-ruleta-elegido")
const numeroGanador = document.getElementById("numero-ganador")
const colorGanador = document.getElementById("div-color-ganador")
const divGanador = document.getElementById("div-ganador")

//---------------color y numeros random-------------------------
const randomNumberFunction = (numero) =>{
    return Math.floor((Math.random()* numero)+1)
  }
  const randomNumber = randomNumberFunction(37)

  const randomColor = () =>{
    if(randomNumber % 2 == 0){
      colorGanador.classList.add("rojo")
      return "rojo"
    }
    else{
      colorGanador.classList.add("negro")
      return "negro"
    }
}