// funciónes simplificadas
const $ = (id) => document.getElementById(id)
const s = (clas) => document.getElementsByClassName(clas)

// Elementos de html capturados para ser manipulados
const spanMascotaJugador =$('mascota-jugador')
const sectionMascota = $('seleccionar-mascota')
const mascotaEnemigo = $('mascota-enemigo')
const contenedorAtaques =$('botones-ataque')
const ataqueDelJugador = $('ataque-jugador')
const ataqueDelEnemigo = $('ataque-enemigo')

const spanVidasJugador = $('vidas-jugador')
const spanVidasOponente = $('vidas-oponente')

const sectionMensajes = $('resultado')

const sectionSeleccionarAtaque = $('seleccionar-ataque')
const botonMascota = $("boton-mascota")

const divBotonesAtaque = $('botones-ataque')
const sectionReiniciar = $('reiniciar')
const botonReiniciar = $('boton-reiniciar')
const contenedorTarjetas =$('contenedorTarjetas')



// Variables para jugar al mokepon
let opcionDeMokepones
let ataqueJugador = []
let ataqueEnemigo =[] 
let vidasJugador = 3
let vidasEnemigo = 3
let ataquesMascotaJugador 
let ataquesMascotaEnemigo =[]
let botonesAtaques = ''
let clasesBotones 
let indexAtaqueJugador
let indexAtaqueEnemigo


class Mokepon{
    constructor(nombre,foto,vida)
    {
        this.nombre =nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}


let inputsMokepon 
let mokepones = []
let hipodogue = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.webp',10)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.webp',10)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp',10)
hipodogue.ataques.push(
    
        {nombre:'💧',id:'Agua'},
        {nombre:'💧',id:'Agua'},
        {nombre:'💧',id:'Agua'},
        {nombre:'🌱',id:'Tierra'},
        {nombre:'🔥',id:'Fuego'}
    
)
capipepo.ataques.push(
        {nombre:'🌱',id:'Tierra'},
        {nombre:'🌱',id:'Tierra'},
        {nombre:'🌱',id:'Tierra'},
        {nombre:'💧',id:'Agua'},
        {nombre:'🔥',id:'Fuego'}
)
ratigueya.ataques.push(
        {nombre:'🔥',id:'Fuego'},
        {nombre:'🔥',id:'Fuego'},
        {nombre:'🔥',id:'Fuego'},
        {nombre:'🌱',id:'Tierra'},
        {nombre:'💧',id:'Agua'}
        
)
mokepones.push(hipodogue,ratigueya,capipepo)

function botonAtaque(e){
    let element= e.target
    ataqueJugador.push(element.id)
    element.disabled = true
    element.style.background = 'transparent'
    ataqueAleatorioEnemigo()
}
   
    
    
    

function revisarVidas()
{   
    
    if (vidasJugador === vidasEnemigo)
    {
        crearMensajeFinal('¡Empate 🎉!')
        
        
    } else if(vidasJugador > vidasEnemigo) {
        crearMensajeFinal('¡Ganaste! quieres jugar de nuevo')

    }
    else{
        crearMensajeFinal("Lo sentimos 😔, siempre puedes volver a intertarlo")
    }
}
function ambosOponentes(indexJugador,indexOponente){
    indexAtaqueJugador = ataqueJugador[indexJugador] 
    indexAtaqueEnemigo = ataqueEnemigo[indexOponente] 
}
function combate(){
    for (let i = 0; i < ataqueJugador.length; i++) {
        console.log(ataqueJugador,ataqueEnemigo)
        console.log(ataqueDelJugador.innerText)
        if (ataqueJugador[i] === ataqueEnemigo[i])
        {
             crearMensaje('Empate 🤷‍♀️')   
             
        }
        else if ((ataqueJugador[i] ==='Fuego' && ataqueEnemigo[i]=='Tierra') || (ataqueJugador[i]=='Agua' && ataqueEnemigo[i]==='Fuego') ||(ataqueJugador[i]==='Tierra' && ataqueEnemigo[i]==='Agua'))
        {
            crearMensaje('Ganaste 🎉' )
            vidasEnemigo --
            spanVidasOponente.innerText = vidasEnemigo
            
        }
        else
        {
            crearMensaje('Perdiste 😔')
            vidasJugador--
            spanVidasJugador.innerText = vidasJugador
        }
        ambosOponentes(i,i)
        
    }
    revisarVidas()
}
function crearMensajeFinal(mensajeFinal)
{
    
              
    
     
    crearMensaje(mensajeFinal)
    divBotonesAtaque.style.display ='none'
    sectionReiniciar.style.display='block'
}

    
    
    
    
    
    
    
    
function crearMensaje(resultado)
{
   
    
    if (vidasJugador > 0 && vidasEnemigo > 0){ 
        let nuevoAtaqueJugador = document.createElement('p') 
        let nuevoAtaqueEnemigo = document.createElement('p') 
        nuevoAtaqueJugador.innerText = indexAtaqueJugador
        nuevoAtaqueEnemigo.innerText = indexAtaqueEnemigo
        ataqueDelJugador.appendChild(nuevoAtaqueJugador)
        ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
    }
    sectionMensajes.innerText = resultado
    
    
    
   
    
}
function definirAtaques(){
    ataquesMascotaJugador.forEach(ataque=>{
        botonesAtaques += `<button id="${ataque.id}" class="boton-ataque">${ataque.nombre}</button>` 
    
    })
    contenedorAtaques.innerHTML = botonesAtaques
    botonesAtaques = s('boton-ataque')
    for(let i=0;i < botonesAtaques.length;i++)
    {
        botonesAtaques[i].addEventListener('click', botonAtaque)
        
        
      
    }
}    
    
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMascotaEnemigo.length-1)
    ataqueEnemigo.push(ataquesMascotaEnemigo[ataqueAleatorio].id)
  iniciarBatalla()
}
    
function iniciarBatalla(){
    if (ataqueJugador.length===5){
        combate()

    }
}

    
function seleccionarMascotaJugador()
{
     let enemigo = false
    
    for (let i=0; i< inputsMokepon.length;i++){
        if (inputsMokepon[i].checked) {
            ataquesMascotaJugador = mokepones[i].ataques
            spanMascotaJugador.innerText = inputsMokepon[i].id
            sectionMascota.style.display = 'none'
            sectionSeleccionarAtaque.style.display = 'flex'
            enemigo = true
            break
        }}
    
  
       
    if(enemigo){
        
        definirAtaques()
        seleccionarMascotaEnemigo()
        
    }
    else 
        {
        alert("Debes seleccionar una mascota para continuar")
    }
}



function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}

function seleccionarMascotaEnemigo()
{   
    let numeroAleatorio = aleatorio(0,mokepones.length-1)
    mascotaEnemigo.innerText = mokepones[numeroAleatorio].nombre
    ataquesMascotaEnemigo = mokepones[numeroAleatorio].ataques
}
function iniciarJuego() {
    opcionDeMokepones = ""
    inputsMokepon = []
    mokepones.forEach((mokepon) => {
        opcionDeMokepones += `
            <input type="radio" name="mascota" id="${mokepon.nombre}" class="select"/>
            <label for="${mokepon.nombre}" class="tarjeta-de-mokepon"> 
                <p>${mokepon.nombre}</p>
                <img src='${mokepon.foto}' alt="${mokepon.nombre}">    
            </label>   
        `       
        
    })
    contenedorTarjetas.innerHTML = opcionDeMokepones
    mokepones.forEach((mokepon)=>{

        inputsMokepon.push($(mokepon.nombre))

    })
    
    
    
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'
    
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", () => location.reload())
    
}





window.addEventListener('load',iniciarJuego)