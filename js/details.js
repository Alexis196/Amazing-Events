const eventosId = data.events
const querySearch = location.search
const params = new URLSearchParams(querySearch)
const id = params.get("id")
const evento = eventosId.find( evento => evento._id == id)

const boxDetail = document.getElementById('box-detail')

createDetail(evento, boxDetail)
function createDetail (lista, elemento){
    elemento.innerHTML = 
    `<div class="image-detail">
        <img class="img-dt" src="${lista.image}" alt="${lista.name}">
    </div>
    <section class="description">
        <h3>${lista.name}</h3>
            <dl>
                <ddd>date: <span>${lista.date}</span></ddd>
                <dd>description: <span>${lista.description}</span></dd>
                <dd>category: <span>${lista.category}</span></dd>
                <dd>place: <span>${lista.place}</span></dd>
                <dd>capacity: <span>${lista.capacity}</span></dd>
                <dd>assistance: <span>${lista.assistance}</span></dd>
                <dd>price: <span>${lista.price}</span></dd>
            </dl>
    </section>`
}



