const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("seleccionar");
const botonReiniciar = document.getElementById("reiniciar");
sectionReiniciar.style.display = "none";
const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("botonesDeAtaque");
const sectionVerMapa = document.getElementById("verMapa");
const mapa = document.getElementById("mapa");
let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputPaidos;
let inputTucapalma;
let inputLangostelvis;
let inputRafis;
let inputDrogon;
let inputXener;
let inputHonsog;
let inputVampy;
let inputLady;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botonAire;
let botonHielo;
let botonOscuridad;
let botonApocalipto;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let Fuego = { nombre: "🔥", id: "ataque-fuego"}
let Agua = { nombre: "💦", id: "ataque-agua"}
let Tierra = { nombre: "🌏", id: "ataque-tierra"}
let Aire = { nombre: "☁️", id: "ataque-aire"}
let Hielo = { nombre: "🧊", id: "ataque-hielo"}
let Oscuridad = { nombre: "🌙", id: "ataque-oscuridad"}
let Apocalipto = { nombre: "🩸", id: "ataque-apocalipto"}
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./png/mokemap.webp";
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 500

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800 

    mapa.width = anchoDelMapa;
    mapa.height = alturaQueBuscamos;

class Mokepon {
  constructor(nombre, foto, vida, ataques, fotoMapa = foto) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = ataques
    this.ancho = 50;
    this.alto = 50;
    this.x = aleatorio(0, mapa.width - this.ancho)
    this.y = aleatorio(0, mapa.height - this.alto)
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

ataques = []

let hipodoge = new Mokepon("Hipodoge", "./png/hipodoge.png", 5, [Agua, Tierra, Hielo, Agua]);
let capipepo = new Mokepon("Capipepo", "./png/capipepo.png", 5, [Tierra, Fuego, Agua, Tierra]);
let ratigueya = new Mokepon( "Ratigueya", "./png/ratigueya.png", 5, [Fuego, Agua, Tierra, Fuego]);
let langostelvis = new Mokepon("Langostelvis", "png/langostelvis.png", 5, [Agua, Agua, Tierra, Fuego, Fuego]);
let tucapalma = new Mokepon("Tucapalma", "png/tucapalma.png", 5, [Agua, Agua, Fuego, Tierra, Tierra]);
let paidos = new Mokepon("Paidos", "png/paidos.png", 5, [Fuego, Fuego, Agua, Tierra, Tierra, Tierra]);
let rafis = new Mokepon("Rafis", "png/mafis.png", 5, [Fuego, Aire, Agua, Agua, Oscuridad, Tierra]);
let drogon = new Mokepon("Drogon", "png/drogon.png", 5, [Fuego, Fuego, Aire, Aire, Oscuridad,]);
let xener = new Mokepon("Xener", "png/xener.png", 5, [Agua, Aire, Oscuridad, Oscuridad, Hielo]);
let honsog = new Mokepon("Honsog", "png/honsog.png", 5, [Agua, Tierra, Tierra, Oscuridad]);
let vampy = new Mokepon("Vampy", "png/vampi.png", 5, [Oscuridad, Oscuridad, Aire, Aire]);
let lady = new Mokepon("LadyM", "png/ladym.png", 5, [Apocalipto, Apocalipto, Apocalipto, Apocalipto, Apocalipto , Apocalipto]);

let hipodogeEnemigo = new Mokepon("Hipodoge", "./png/hipodoge.png", 5, [Agua, Tierra, Hielo, Agua]);
let capipepoEnemigo = new Mokepon("Capipepo", "./png/capipepo.png", 5, [Tierra, Fuego, Agua, Tierra]);
let ratigueyaEnemigo = new Mokepon("Ratigueya", "png/ratigueya.png", 5, [Fuego, Agua, Tierra, Fuego]);
let langostelvisEnemigo = new Mokepon("Langostelvis","png/langostelvis.png",5, [Agua, Agua, Tierra, Fuego, Fuego]);
let tucapalmaEnemigo = new Mokepon("Tucapalma", "png/tucapalma.png", 5, [Agua, Agua, Fuego, Tierra, Tierra]);
let paidosEnemigo = new Mokepon("Paidos", "png/paidos.png", 5, [Fuego, Fuego, Agua, Tierra, Tierra, Tierra]);
let rafisEnemigo = new Mokepon("Rafis", "png/mafis.png", 5, [Fuego, Aire, Agua, Agua, Tierra, Tierra]);
let drogonEnemigo = new Mokepon("Drogon", "png/drogon.png", 5, [Fuego, Fuego, Aire, Aire, Oscuridad,]);
let xenerEnemigo = new Mokepon("Xener", "png/xener.png", 5, [Agua, Aire, Oscuridad, Oscuridad, Hielo]);
let honsogEnemigo = new Mokepon("Honsog", "png/honsog.png", 5, [Agua, Tierra, Tierra, Oscuridad]);
let vampyEnemigo = new Mokepon("Vampy", "png/vampi.png", 5, [Oscuridad, Oscuridad, Aire, Aire]);

mokepones.push(
    hipodoge,
    capipepo,
    ratigueya,
    langostelvis,
    tucapalma,
    paidos,
    rafis,
    drogon,
    xener,
    honsog,
    vampy,
    lady
  );
  function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display = "none";
    mokepones.forEach((mokepon) => {
      opcionDeMokepones = `
          <input type="radio" name="mascota" id=${mokepon.nombre} />
          <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
              <p class="parrafos-edit">${mokepon.nombre}</p>
              <img src=${mokepon.foto} alt=${mokepon.nombre}>
          </label>
          `;
      contenedorTarjetas.innerHTML += opcionDeMokepones;
      inputHipodoge = document.getElementById("Hipodoge");
      inputCapipepo = document.getElementById("Capipepo");
      inputRatigueya = document.getElementById("Ratigueya");
      inputPaidos = document.getElementById("Paidos");
      inputTucapalma = document.getElementById("Tucapalma");
      inputLangostelvis = document.getElementById("Langostelvis");
      inputRafis = document.getElementById("Rafis");
      inputDrogon = document.getElementById("Drogon");
      inputXener = document.getElementById("Xener");
      inputHonsog = document.getElementById("Honsog");
      inputVampy = document.getElementById("Vampy");
      inputLady = document.getElementById("LadyM")
    });
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego);
  }
  function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none";
    if (inputHipodoge.checked) {
      spanMascotaJugador.innerHTML = inputHipodoge.id;
      mascotaJugador = inputHipodoge.id;
    } else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = inputCapipepo.id;
      mascotaJugador = inputCapipepo.id;
    } else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = inputRatigueya.id;
      mascotaJugador = inputRatigueya.id;
    } else if (inputPaidos.checked == true) {
      spanMascotaJugador.innerHTML = inputPaidos.id;
      mascotaJugador = inputPaidos.id;
    } else if (inputTucapalma.checked == true) {
      spanMascotaJugador.innerHTML = inputTucapalma.id;
      mascotaJugador = inputTucapalma.id;
    } else if (inputLangostelvis.checked == true) {
      spanMascotaJugador.innerHTML = inputLangostelvis.id;
      mascotaJugador = inputLangostelvis.id;
    } else if (inputRafis.checked == true) {
      spanMascotaJugador.innerHTML = inputRafis.id;
      mascotaJugador = inputRafis.id;
    } else if (inputDrogon.checked == true) {
      spanMascotaJugador.innerHTML = inputDrogon.id;
      mascotaJugador = inputDrogon.id;
    } else if (inputXener.checked == true) {
      spanMascotaJugador.innerHTML = inputXener.id;
      mascotaJugador = inputXener.id;
    } else if (inputHonsog.checked == true) {
      spanMascotaJugador.innerHTML = inputHonsog.id;
      mascotaJugador = inputHonsog.id;
    } else if (inputVampy.checked == true) {
      spanMascotaJugador.innerHTML = inputVampy.id;
      mascotaJugador = inputVampy.id;
    } else if (inputLady.checked == true) {
      spanMascotaJugador.innerHTML = inputLady.id;
      mascotaJugador = inputLady.id;
    } else {
      alert("Selecciona una mascota");
    }
    extraerAtaques(mascotaJugador);
    sectionVerMapa.style.display = "flex";
    iniciarMapa();
  }
  function extraerAtaques(mascotaJugador) {
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
      if (mascotaJugador === mokepones[i].nombre) {
        ataques = mokepones[i].ataques;
      }
    }
    mostrarAtaques(ataques);
  }
  function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
      ataquesMokepon = `
          <button id=${ataque.id} class="btn-ataque BAtaque">${ataque.nombre}</button>
          `;
      contenedorAtaques.innerHTML += ataquesMokepon;
    });
    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botonAire = document.getElementById("boton-aire")
    botonOscuridad = document.getElementById("boton-oscuridad")
    botonApocalipto = document.getElementById("boton-apocalipto")
    botones = document.querySelectorAll(".BAtaque");
  }
  function secuenciaAtaque() {
    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        if (e.target.textContent === "🔥") {
          ataqueJugador.push("FUEGO");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else if (e.target.textContent === "💦") {
          ataqueJugador.push("AGUA");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else if (e.target.textContent === "☁️") {
          ataqueJugador.push("AIRE");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else if (e.target.textContent === "🧊") {
          ataqueJugador.push("HIELO");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else if (e.target.textContent === "🌙") {
          ataqueJugador.push("OSCURIDAD");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else if (e.target.textContent === "🩸") {
          ataqueJugador.push("APOCALIPTO");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        } else {
          ataqueJugador.push("TIERRA");
          console.log(ataqueJugador);
          boton.style.background = "#112f58";
          boton.disabled = true;
        }
        ataqueAleatorioEnemigo();
      });
    });
  }
  function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque();
  }
  function ataqueAleatorioEnemigo() {
    console.log("Ataques enemigo", ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
    if (ataqueAleatorio == 0 || ataqueAleatorio == 6) {
      ataqueEnemigo.push("FUEGO");
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 10) {
      ataqueEnemigo.push("AGUA");
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 11) {
      ataqueEnemigo.push("AIRE");
    } else if (ataqueAleatorio == 1 || ataqueAleatorio == 7) {
      ataqueEnemigo.push("HIELO");
    } else if (ataqueAleatorio == 8 || ataqueAleatorio == 5) {
      ataqueEnemigo.push("OSCURIDAD");
    } else if (ataqueAleatorio == 4 || ataqueAleatorio == 9) {
      ataqueEnemigo.push("TIERRA");
    } else {
      ataqueEnemigo.push("APOCALIPTO");
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
  }
  function iniciarPelea() {
    if (ataqueJugador.length === botones.length) {
      combate();
    }
  }
  function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
  }
  function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
      if (ataqueJugador[index] === ataqueEnemigo[index]) {
        indexAmbosOponente(index, index);
        crearMensaje("EMPATE");
      } else if (
        ataqueJugador[index] === "FUEGO" &&
        (ataqueEnemigo[index] === "TIERRA" || ataqueEnemigo[index] === "HIELO")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana fuego");
      } else if (
        ataqueJugador[index] === "AGUA" && (ataqueEnemigo[index] === "FUEGO" || ataqueEnemigo[index] === "OSCURIDAD")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana agua");
      } else if (
        ataqueJugador[index] === "TIERRA" &&
      (ataqueEnemigo[index] === "AGUA" || ataqueEnemigo[index] === "AIRE" || ataqueEnemigo[index] === "HIELO")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana tierra");
      } else if (
        ataqueJugador[index] === "AIRE" &&
      (ataqueEnemigo[index] === "AGUA" || ataqueEnemigo[index] === "FUEGO" || ataqueEnemigo[index] === "OSCURIDAD")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana aire");
      } else if (
        ataqueJugador[index] === "HIELO" &&
      (ataqueEnemigo[index] === "AGUA" || ataqueEnemigo[index] === "AIRE")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana hielo");
      } else if (
        ataqueJugador[index] === "OSCURIDAD" &&
      (ataqueEnemigo[index] === "FUEGO" || ataqueEnemigo[index] === "TIERRA" || ataqueEnemigo[index] === "HIELO")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana Oscuridad");
      } else if (
        ataqueJugador[index] === "APOCALIPTO" &&
      (ataqueEnemigo[index] === "FUEGO" || ataqueEnemigo[index] === "TIERRA" || ataqueEnemigo[index] === "HIELO" || ataqueEnemigo[index] === "AGUA" || ataqueEnemigo[index] === "AIRE" || ataqueEnemigo[index] === "OSCURIDAD")
      ) {
        indexAmbosOponente(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
        console.log("gana apocalipto");
      } else {
        indexAmbosOponente(index, index);
        crearMensaje("PERDISTE");
        victoriasEnemigo++;
        spanVidasEnemigo.innerHTML = victoriasEnemigo;
      }
    }
    revisarVidas();
  }
  function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
      crearMensajeFinal("Esto fue un empate!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
      crearMensajeFinal("FELICITACIONES! Ganaste :)");
    } else {
      crearMensajeFinal("Lo siento, perdiste :(");
    }
  }
  function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  }
  function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
    sectionReiniciar.style.display = "block";
  }
  function reiniciarJuego() {
    location.reload();
  }
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function pintarCanvas() {
    mascotaJugadorObjeto.x =
      mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y =
      mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
    mascotaJugadorObjeto.pintarMokepon();
    hipodogeEnemigo.pintarMokepon();
    capipepoEnemigo.pintarMokepon();
    ratigueyaEnemigo.pintarMokepon();
    langostelvisEnemigo.pintarMokepon();
    tucapalmaEnemigo.pintarMokepon();
    paidosEnemigo.pintarMokepon();
    rafisEnemigo.pintarMokepon();
    drogonEnemigo.pintarMokepon();
    xenerEnemigo.pintarMokepon();
    honsogEnemigo.pintarMokepon();
    vampyEnemigo.pintarMokepon();
    if (
      mascotaJugadorObjeto.velocidadX !== 0 ||
      mascotaJugadorObjeto.velocidadY !== 0
    ) {
      revisarColision(hipodogeEnemigo);
      revisarColision(capipepoEnemigo);
      revisarColision(ratigueyaEnemigo);
      revisarColision(langostelvisEnemigo);
      revisarColision(tucapalmaEnemigo);
      revisarColision(paidosEnemigo);
      revisarColision(rafisEnemigo);
      revisarColision(drogonEnemigo);
      revisarColision(xenerEnemigo);
      revisarColision(honsogEnemigo);
      revisarColision(vampyEnemigo);
    }
  }
  function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5;
  }
  function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5;
  }
  function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5;
  }
  function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5;
  }
  function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
  }
  function sePrecionoUnaTecla(event) {
    switch (event.key) {
      case "ArrowUp":
      case "w":
        moverArriba();
        break;
      case "ArrowDown":
      case "s":
        moverAbajo();
        break;
      case "ArrowLeft":
      case "a":
        moverIzquierda();
        break;
      case "ArrowRight":
      case "d":
        moverDerecha();
        break;
      default:
        break;
    }
  }
  function iniciarMapa() {

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener("keydown", sePrecionoUnaTecla);
    window.addEventListener("keyup", detenerMovimiento);
  }
  function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
      if (mascotaJugador === mokepones[i].nombre) {
        return mokepones[i];
      }
    }
  }
  function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;
    if (
      abajoMascota < arribaEnemigo ||
      arribaMascota > abajoEnemigo ||
      derechaMascota < izquierdaEnemigo ||
      izquierdaMascota > derechaEnemigo
    ) {
      return;
    }
    detenerMovimiento();
    clearInterval(intervalo)
    console.log("Se detecto una colision");
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "none";
    seleccionarMascotaEnemigo(enemigo);
  }
  window.addEventListener("load", iniciarJuego);
  
