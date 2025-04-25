
function seleccionarMascota()
{
    let $ = (id) => document.getElementById(id)
    let capipepo = $('capipepo')
    let ratigueya = $('ratigueya')
    let hipodogue = $('hipodogue')
    let langostelvis = $('langostelvis')
    let tucapalma = $('tucapalma')
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
    else if (langostelvis.checked)
    { 
        alert('has seleccionado a Langostelvis')
    }
    else if (tucapalma.checked)
    { 
        alert('has seleccionado a Tucapalma')
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