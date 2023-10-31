import { ahorcadoInicio } from "./ahorcado.js"
import {jugarRuleta , reset} from "./ruleta.js"
import {iniciarPreguntados} from "./preguntados.js"
 
const botonJugarAhorcado = document.getElementById("start-ahorcado-btn") 
const botonJugarRuleta = document.getElementById("start-ruleta-btn") 
const botonJugarPreguntados =document.getElementById("start-preguntados-btn")


botonJugarAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});
botonJugarRuleta.addEventListener("click", () => {
    reset()
});

botonJugarPreguntados.addEventListener("click", () =>{
    iniciarPreguntados()
})
const buttonReset = document.getElementById("boton-reset")
buttonReset.addEventListener("click", ()=>{
    reset()
})
const buttonStart = document.getElementById("boton-tirar")
buttonStart.addEventListener("click", ()=>{
    jugarRuleta ()
  });