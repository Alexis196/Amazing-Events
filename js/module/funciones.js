export function createCard(event){
    return `<div class="cards">
                <img src="${event.image}" alt="${event.name}">
                <div class="cards-content">
                    <h4 id="title-h4">${event.name}</h4>
                <div class="price-button">
                    <p>Price: ${event.price}</p>
                    <a class="button-details" href="./html/details.html?id=${event._id}">Details</a>
                    </div>
                </div>
            </div>`
}

export function loopList(list){
    let aux = ''
    list.forEach(event =>{
        aux += createCard(event)
    })
    return aux
}

export function printCard(list, element){
    element.innerHTML = loopList(list)
}

export function messageError(){
    return `<div class="cont-error">
                <img class="error-icon" src="../assets/icon/error.png" alt="food-fair">
                <p class="messege-error">Event not found</p>
            </div>`
}

export function printMessage(list, element){
    if(list.length === 0){
        element.innerHTML = messageError()
    }else{
        return printCard(list, element)
    }
}

export function createCheck(list){
    return `<div>
                <input type="checkbox" name="" id="${list}" value="${list}">
                <label for="${list}">${list}</label>
            </div>`
}

export function createElements(lista, elemento){
    let input = ''
    lista.forEach(cat =>{
        input += createCheck(cat)
    })
    return input
}

export function printCheck(list, element){
    element.innerHTML = createElements(list)
}

export function filterCheck(e){
    let input = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)
    if(input.length === 0){ return e }
    return e.filter( inputFiltrado => input.includes(inputFiltrado.category))
}

export function filterSearch(search, e){
    let arrayFiltro = e.filter(searchFiltering => searchFiltering.name.toLowerCase().includes(search))
    return arrayFiltro
}

// --------- cards past / upcoming------------

export function createCardPU(event){
    return `<div class="cards">
                <img src="${event.image}" alt="${event.name}">
                <div class="cards-content">
                    <h4 id="title-h4">${event.name}</h4>
                <div class="price-button">
                    <p>Price: ${event.price}</p>
                    <a class="button-details" href="../html/details.html?id=${event._id}">Details</a>
                    </div>
                </div>
            </div>`
}

export function loopListUp(list){
    let aux = ''
    list.forEach(event =>{
        aux += createCardPU(event)
    })
    return aux
}

export function printCardUp(list, element){
    element.innerHTML = loopListUp(list)
}

export function loopListPast(list){
    let aux = ''
    list.forEach(event =>{
        aux += createCardPU(event)
    })
    return aux
}

export function printCardPast(list, element){
    element.innerHTML = loopListPast(list)
}

export function createDetail (lista, elemento){
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