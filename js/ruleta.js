
export const ruletaInicio = () =>{
const buttonStart = document.getElementById("boton-tirar")
const buttonReset = document.getElementById("boton-reset")
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

//---------------funcion que avisa que resultado obtuviste-------------------------
const youWin = () =>{
  console.log("random Number", randomNumber);
  console.log("input numeros", inputNumeros.value);
  console.log("select color", selectColor.value);
  console.log("random color", randomColor());
    if(randomNumber === inputNumeros.value && randomColor() === selectColor.value){
      acertasteNumero.style.display = "flex"
      acertasteColor.style.display = "flex"
      console.log("youWin")
    }

   if(randomNumber === inputNumeros.value ){
      acertasteNumero.style.display = "flex"
      console.log("youWin solo numero")
    }
    if(randomColor === selectColor.value){
      acertasteColor.style.display = "flex"
      console.log("youWin solo color")
    }
    // else{
    //     console.error("no acertaste") 
    // }
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
buttonStart.addEventListener("click", ()=>{
    divGanador.style.display = "flex"
    numeroGanador.textContent = randomNumber; 
    randomColor()
    youWin()
  });
  buttonReset.addEventListener("click", ()=>{
    numeroGanador.innerHTML= ""; 
    selectColor.value = "valor"
    divGanador.style.display = "none"
  })
}
