const palabra = document.querySelector(".ingresa_texto")
const boton = document.querySelector("#encriptar")
const boton2 = document.querySelector("#desencriptar")
const copiar = document.querySelector("#copiar")
const resultado = document.querySelector("#msg_resultado")

window.addEventListener('load', init, false)

function init(){
    let imagen = document.getElementById("imagen")
    let mensaje = document.getElementById("contenido_lateral")
    mensaje.style.display = 'none'
    imagen.style.display = 'block'

    boton.addEventListener('click', function (e) {
        if(palabra.value != 0){
            let texto = palabra.value
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")
            mensaje.style.display = 'block'
            imagen.style.display = 'none'
            resultado.value = texto
        }else{
            imagen.style.display='block'
            mensaje.style.display = 'none'
        }
    }, false);

    boton2.addEventListener('click', function (e) {
        if(palabra.value != 0){
            let texto = palabra.value
            .replace(/enter/gi,"e")
            .replace(/imes/gi,"i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi,"o")
            .replace(/ufat/gi,"u")
            mensaje.style.display = 'block'
            imagen.style.display = 'none'
            resultado.value = texto
        }else{
            imagen.style.display='block'
            mensaje.style.display = 'none'
        }
    }, false);

    copiar.addEventListener('click', function (e) {
         resultado.select();
    }, false);
    
}

