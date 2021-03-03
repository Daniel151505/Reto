const pais = document.getElementById('pais')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        paises(data)
    } catch (error) {
        console.log(error)
    }
}

const paises = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                
                <p>
                    <b>Continente: </b>
                    ${item.region}
                </p>
            </div>
        </article>
        `
    });
    pais.innerHTML = elementos
}
