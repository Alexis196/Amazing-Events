import { createCardPU, loopListPast, printCardPast, messageError, printMessage, createCheck, createElements, printCheck, filterCheck, filterSearch } from'../js/module/funciones.js'

// const category = data.events 
const cardsUp = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const buscador = document.getElementById('search')
const message = document.getElementById('message')
// const filterCategories = Array.from( new Set (category.map(cate => cate.category)))

// printCardPast(category, cardsUp)
// printCheck(filterCategories, checks)

// ------------------------ Fetch -------------------------

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then( data => {
        printCardPast(data.events, cardsUp)
        const filterCategories = data.events.map(cate => cate.category)
        const filterCategories2 = [...new Set (filterCategories)]
        printCheck(filterCategories2, checks)
        
    })
    .catch(error => error)

// ------------------------ Events -------------------------

checks.addEventListener('change',(e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    printCardPast(filtrados, cardsUp)
    printMessage(filtrados, cardsUp)
})

buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    printCardPast(filtrados, cardsUp)
    printMessage(filtrados, cardsUp)
})

buscador.addEventListener('submit', (e)=>{
    e.preventDefault()
})