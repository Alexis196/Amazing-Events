const eventos = data.events 

function cards(dato){
    const cardsHome = document.getElementById("cont-cards")
    for (let events of dato){
        if(events.date < data.currentDate){
            cardsHome.innerHTML +=
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
        }
    }
}
cards(eventos)
