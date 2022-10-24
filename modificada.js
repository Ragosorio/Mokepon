let ataqueJugador 
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {
    let sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaques.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"


    let btnMascota = document.getElementById("seleccionar")
    btnMascota.addEventListener("click", seleccionarMascotaJugador)

    let btnFuego = document.getElementById("ataque-fuego")
    btnFuego.addEventListener("click", ataqueFuego)
    let btnAgua = document.getElementById("ataque-agua")  
    btnAgua.addEventListener("click", ataqueAgua)
    let btnTierra = document.getElementById("ataque-tierra")
    btnTierra.addEventListener("click", ataqueTierra)

    let btnSiguienteBatalla = document.getElementById("reiniciar")
    btnSiguienteBatalla.addEventListener("click", reiniciarJuego)
}

function cambiarPantallaMascotaAtaque() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaques.style.display = "flex"

    let btnMascota = document.getElementById("seleccionar")
    btnMascota.disabled = true
}

function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge"
        cambiarPantallaMascotaAtaque()
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo"
        cambiarPantallaMascotaAtaque()
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya"
        cambiarPantallaMascotaAtaque()
    } else{
        alert("Elige una mascota")
    }


    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        //Hipodoge
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2){
        //Capipepo
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else{
        //Ratigueya
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataquesEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataquesEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataquesEnemigo()
}

function ataquesEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    resultadosBatalla()
}

function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let seccionMensajes = document.getElementById("resultado")

    seccionMensajes.innerHTML = resultadoFinal

    let btnFuego = document.getElementById("ataque-fuego")
    btnFuego.disabled = true
    let btnAgua = document.getElementById("ataque-agua")  
    btnAgua.disabled = true
    let btnTierra = document.getElementById("ataque-tierra")
    btnTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

// function crearMensajeDeBatallal(mensajeDeBatalla) {
//     let seccionMensajes = document.getElementById("mensajes")
//     let parrafo = document.createElement("p")
//     parrafo.innerHTML = mensajeDeBatalla
//     seccionMensajes.appendChild(parrafo)
// }

function resultadosBatalla() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 

    // revisarVidasUno()
    revisarVidas()

} 

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("SUERTE PARA LA PROXIMA 💔")
    } else if ( vidasEnemigo == 0){
        crearMensajeFinal("¡FELICITACIONES! GANASTE :)")
    }
}

// function revisarVidasUno() {
//     if (vidasJugador == 1 && vidasEnemigo == 1) {
//         crearMensajeDeBatallal("COMBATE DECISIVO")
//     } 
// }

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
 

window.addEventListener("load", iniciarJuego)
