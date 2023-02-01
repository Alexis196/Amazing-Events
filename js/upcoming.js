function cards(){
    const cardsHome = document.getElementById("cont-cards")
    let events = ""
    for (let events of data.events){
        if(events.date > data.currentDate){
            let divContainer = document.createElement("div")
            divContainer.innerHTML =
            `<div class="cards">
                <img src="${events.image}" alt="food-fair">
                <div class="cards-content">
                    <h4 id="title-h4">${events.name}</h4>
                    <div class="price-button">
                        <p>Price: ${events.price}</p>
                        <a class="button-details" href="./html/details.html">Details</a>
                    </div>
                </div>
            </div>`
            cardsHome.appendChild(divContainer)
        }
    }
}
cards()