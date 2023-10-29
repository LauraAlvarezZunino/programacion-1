import { ahorcadoInicio } from "./ahorcado.js"
import {ruletaInicio} from "./ruleta.js"
import {iniciarPreguntados} from "./preguntados.js"
 
const botonAhorcado = document.getElementById("btn-play") 
const botonRuleta = document.getElementById("boton-tirar") 
const botonPreguntados =document.getElementById("start-preguntados")
botonAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});
botonRuleta.addEventListener("click", () => {
    ruletaInicio()
});

botonPreguntados.addEventListener("click", () =>{
    iniciarPreguntados()
})