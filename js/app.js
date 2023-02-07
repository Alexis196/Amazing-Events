const cardsHome = document.getElementById("cont-cards")
const checks = document.getElementById("category-check")
const category = data.events
const filterCategories = Array.from( new Set (category.map(cate => cate.category)))

// console.log( [check.children] )
// for ( let check of checks){
//     console.log(check)
// }


function cards(e){
    for(let event of e){
        cardsHome.innerHTML +=
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


// // console.log([checks.children])
// checks.addEventListener('click',filterCards)

// function filterCards(e){
//     let prueba = []
//     for( let check of checks.children){
//         if(check.firstElementChild.checked){
//             prueba.push(check.firstElementChild.value)
//         }
//     }
//     console.log(prueba)
// }
