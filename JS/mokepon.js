
function seleccionarMascota()
{
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let hipodogue = document.getElementById('hipodogue')
    
    if (hipodogue.checked)
    {
        alert('has seleccionado a Hipodogue')
    }
    else if (ratigueya.checked)
    {
        alert('has seleccionado a Ratigueya')
    }
    else if (capipepo.checked)
    {
        alert('has seleccionado a capipepo')
    }
    else{
        alert('Debes seleccionar una mascota para continuar')
    }

}
function iniciarJuego()
{
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click",seleccionarMascota)
}




window.addEventListener('load',iniciarJuego)