import { createCard, loopList, printCard, messageError, printMessage, createCheck, createElements, printCheck, filterCheck, filterSearch, } from'../js/module/funciones.js'

const cardsHome = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const buscador = document.getElementById('search')
const message = document.getElementById('message')


// printCard(category, cardsHome)

// ------------------------ Fetch -------------------------

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then( data => {
        printCard(data.events, cardsHome)
        const filterCategories = data.events.map(cate => cate.category)
        const filterCategories2 = [...new Set (filterCategories)]
        printCheck(filterCategories2, checks)
    })
    .catch(error => error)


// ------------------------ Events -------------------------

checks.addEventListener('change',(e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, filterCategories2)
    let filtrados = filterCheck(functionSearch)
    printCard(filtrados, cardsHome)
    printMessage(filtrados, cardsHome)
})

buscador.addEventListener('keyup', (e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, filterCategories2)
    let filtrados = filterCheck(functionSearch)
    printCard(filtrados, cardsHome)
    printMessage(filtrados, cardsHome)
})

buscador.addEventListener('submit', (e)=>{
    e.preventDefault()
})
