import { createCardPU, loopListUp, printCardUp, messageError, printMessage, createCheck, createElements, printCheck, filterCheck, filterSearch, createDetail } from'../js/module/funciones.js'


const cardsUp = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const buscador = document.getElementById('search')
const message = document.getElementById('message')


// ------------------------ Fetch -------------------------

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then( data => {
        let listUp = data.events.filter(dato => dato.date > data.currentDate)
        printCardUp(listUp, cardsUp)
        const filterCategories = listUp.map(cate => cate.category)
        const filterCategories2 = [...new Set (filterCategories)]
        printCheck(filterCategories2, checks)

        checks.addEventListener('change',(e)=>{
            let search = buscador[0].value.toLowerCase()
            let functionSearch = filterSearch(search, listUp)
            let filtrados = filterCheck(functionSearch)
            printCardUp(filtrados, cardsUp)
            printMessage(filtrados, cardsUp)
        })
        
        buscador.addEventListener('keyup', (e)=>{
            e.preventDefault()
            let search = buscador[0].value.toLowerCase()
            let functionSearch = filterSearch(search, listUp)
            let filtrados = filterCheck(functionSearch)
            printCardUp(filtrados, cardsUp)
            printMessage(filtrados, cardsUp)
        })
        
        buscador.addEventListener('submit', (e)=>{
            e.preventDefault()
        })
    })
    .catch(error => error)

