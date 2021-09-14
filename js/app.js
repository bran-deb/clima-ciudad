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
        console.log(ciudad);
        console.log(pais);
    }
    // consultar API
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