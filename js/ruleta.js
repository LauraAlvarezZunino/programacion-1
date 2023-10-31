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
const randomNumber = randomNumberFunction(37)
const randomColorVar = randomColor()
//---------------funcion que avisa que resultado obtuviste-------------------------
const youWin = () =>{

  if(randomNumber == inputNumeros.value){
    acertasteNumero.style.display = "flex"
    }
    if(randomColorVar == selectColor.value){
      acertasteColor.style.display = "flex"
    }
  }

  //-------------tomo el valor del input y lo paso al div de numero seleccionado ---------------------

inputNumeros.addEventListener("change", ()=>{
    numeroRuleta.textContent = inputNumeros.value; 
  });

   //-------------tomo el valor del select y le doy el color ---------------------
  selectColor.addEventListener("change", ()=>{
    if(selectColor.value === "rojo"){
      cuadradoNumeroRuleta.classList.remove("negro")
      cuadradoNumeroRuleta.classList.add("rojo")
    }
     else if(selectColor.value === "negro"){
      cuadradoNumeroRuleta.classList.remove("rojo")
      cuadradoNumeroRuleta.classList.add("negro") 
    }
  
  });
//------------------ agrego evento para boton tirar-------------------


export const jugarRuleta = () =>{
  divGanador.style.display = "flex"
  numeroGanador.innerHTML= randomNumber; 
  randomColor()
  youWin()
}
const resetElegirNumero = () =>{
  numeroRuleta.innerHTML= 0
  selectColor.value = "valor"
  inputNumeros.value = 0
}
const resetDesaparecer = () =>{
  divGanador.style.display= "none"
  acertasteNumero.style.display ="none"
  acertasteColor.style.display ="none"
}

export const reset = () =>{
resetElegirNumero()
resetDesaparecer()
}
