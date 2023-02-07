const cardsHome = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const category = data.events
const filterCategories = Array.from( new Set (category.map(cate => cate.category)))


function cards(e){
    let aux = ''
    for(let event of e){
        aux +=
        `<div class="cards">
            <img src="${event.image}" alt="food-fair">
            <div class="cards-content">
                <h4 id="title-h4">${event.name}</h4>
            <div class="price-button">
                <p>Price: ${event.price}</p>
                <a class="button-details" href="./html/details.html">Details</a>
                </div>
            </div>
        </div>`
    }
    cardsHome.innerHTML = aux
}

cards(category)
// -------------------- Create Check and label -----------------------


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

// ------------------------ Events -------------------------


// console.log([checks.children])
checks.addEventListener('change',(e)=>{
    let filtrados = filterCheck(category)
    cards(filtrados)
})

function filterCheck(e){
    let input = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)
    if(input.length === 0){ return (e) }
    return e.filter( inputFiltrado => input.includes(inputFiltrado.category))
}
