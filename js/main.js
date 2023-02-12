import { createCard, loopList, printCard, messageError, printMessage, createCheck, createElements, printCheck, filterCheck, filterSearch, } from'../js/module/funciones.js'

const cardsHome = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const buscador = document.getElementById('search')
const message = document.getElementById('message')
const category = data.events
const filterCategories = Array.from( new Set (category.map(cate => cate.category)))

printCheck(filterCategories, checks)
printCard(category, cardsHome)
// ------------------------ Events -------------------------

checks.addEventListener('change',(e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    printCard(filtrados, cardsHome)
    printMessage(filtrados, cardsHome)
})

buscador.addEventListener('keyup', (e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    printCard(filtrados, cardsHome)
    printMessage(filtrados, cardsHome)
})

buscador.addEventListener('submit', (e)=>{
    e.preventDefault()
})
