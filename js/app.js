const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

//similar a DOMcontentLoaded pero en window
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})


function buscarClima(e) {
    e.preventDefault()

    //validar
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    if ((ciudad && pais) === '') {
        mostrarError('Ambos campos son obligatorios')
    } else {
        // consultar API
        // console.log(ciudad);
        // console.log(pais);
        consultarAPI(ciudad, pais)
    }
}


function mostrarError(mensaje) {
    const alerta = document.querySelector('.border-red-400')

    if (!alerta) {
        //crear alerta
        const alerta = document.createElement('div')
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700',
            'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center')
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
        `
        container.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }
}

function consultarAPI(ciudad, pais) {
    const appId = 'ddf50a82df0489b48deefa400018b3b8'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            if (datos.cod === '404') {
                mostrarError('ciudad no encontrada');
            }
        })
}