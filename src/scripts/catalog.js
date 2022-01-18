//connects with container class in HTML document using querySelector
//creates html code for each plant that was harvested using the += sign and adds as text to the container class

export const catalog = (harvestedFoodArray) => {
    const containerSelector = document.querySelector(".container")
    for (const food of harvestedFoodArray) {
        containerSelector.innerHTML +=`<section class = "plant">${food.type}</section>`
    }
}

