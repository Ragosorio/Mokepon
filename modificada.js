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

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaques.style.display = "block"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else{
        alert("Elige una mascota")
    }

    let btnMascota = document.getElementById("seleccionar")
    btnMascota.disabled = true
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
    let parrafo = document.createElement("p")
    let seccionMensajes = document.getElementById("mensajes")
    parrafo.innerHTML = "INFORME DE BATALLA <br>" + "Tu mascota atacó con " + ataqueJugador + ", la mascota de tu enemigo atacó con " + ataqueEnemigo + "<br>" + resultado + "<br><br><br>"
    seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    seccionMensajes.appendChild(parrafo)

    let btnFuego = document.getElementById("ataque-fuego")
    btnFuego.disabled = true
    let btnAgua = document.getElementById("ataque-agua")  
    btnAgua.disabled = true
    let btnTierra = document.getElementById("ataque-tierra")
    btnTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function crearMensajeDeBatallal(mensajeDeBatalla) {
    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = mensajeDeBatalla
    seccionMensajes.appendChild(parrafo)
}

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

    revisarVidasUno()
    revisarVidas()

} 

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("SUERTE PARA LA PROXIMA 😂")
    } else if ( vidasEnemigo == 0){
        crearMensajeFinal("¡FELICITACIONES! GANASTE :)")
    }
}

function revisarVidasUno() {
    if (vidasJugador == 1 && vidasEnemigo == 1) {
        crearMensajeDeBatallal("COMBATE DECISIVO")
    } 
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
 

window.addEventListener("load", iniciarJuego)
