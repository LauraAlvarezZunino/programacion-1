import { ahorcadoInicio } from "./ahorcado.js"
import {ruletaInicio} from "./ruleta.js"
import {iniciarPreguntados} from "./preguntados.js"
 
const botonJugarAhorcado = document.getElementById("start-ahorcado-btn") 
const botonJugarRuleta = document.getElementById("start-ruleta-btn") 
const botonJugarPreguntados =document.getElementById("start-preguntados-btn")


botonJugarAhorcado.addEventListener("click", () => {
    ahorcadoInicio()
});
botonJugarRuleta.addEventListener("click", () => {
    ruletaInicio()
});

botonJugarPreguntados.addEventListener("click", () =>{
    iniciarPreguntados()
})