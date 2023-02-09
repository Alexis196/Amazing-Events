const category = data.events 
const cardsPast = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const buscador = document.getElementById('search')
const message = document.getElementById('message')
const filterCategories = Array.from( new Set (category.map(cate => cate.category)))

function cards(e){
    if(e.length === 0){
        cardsPast.innerHTML = `
        <div class="cont-error">
            <img class="error-icon" src="../assets/icon/error.png" alt="food-fair">
            <p class="messege-error">item not found</p>
        </div>
        `
    }else{
        let aux = ''
        for(let event of e){
            if(event.date < data.currentDate){
                aux +=
                `<div class="cards">
                    <img src="${event.image}" alt="food-fair">
                    <div class="cards-content">
                        <h4 id="title-h4">${event.name}</h4>
                    <div class="price-button">
                        <p>Price: ${event.price}</p>
                        <a class="button-details" href="../html/details.html?id=${event._id}">Details</a>
                        </div>
                    </div>
                </div>`
            }
        }
    cardsPast.innerHTML = aux
    }
}

cards(category)

createElements(filterCategories, checks)

function createElements(lista, elemento){
    let input = ''
    lista.forEach(cat =>{
        input +=`
            <div>
                <input type="checkbox" name="" id="${cat}" value="${cat}">
                <label for="${cat}">${cat}</label>
            </div>`
    })
    elemento.innerHTML = input
}


function filterCheck(e){
    let input = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)
    if(input.length === 0){ return e }
    return e.filter( inputFiltrado => input.includes(inputFiltrado.category))
}

function filterSearch(search, e){
    let arrayFiltro = e.filter(searchFiltering => searchFiltering.name.toLowerCase().includes(search))
    // if(arrayFiltro.length === 0){
    //     return alert('asda')
    // }
    return arrayFiltro
}

// ------------------------ Events -------------------------

checks.addEventListener('change',(e)=>{
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    cards(filtrados)
})

buscador.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let search = buscador[0].value.toLowerCase()
    let functionSearch = filterSearch(search, category)
    let filtrados = filterCheck(functionSearch)
    cards(filtrados)
})

