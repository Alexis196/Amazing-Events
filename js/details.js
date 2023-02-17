import {createDetail} from '../js/module/funciones.js'

const boxDetail = document.getElementById('box-detail')


fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then( data => {
        const querySearch = location.search
        const params = new URLSearchParams(querySearch)
        const id = params.get("id")
        const datoId = data.events.find( evento => evento._id == id)
        createDetail(datoId, boxDetail)
    })
    .catch(error => error)




