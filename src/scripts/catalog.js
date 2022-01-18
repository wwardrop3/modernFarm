export const catalog = (harvestedFoodArray) => {
    const containerSelector = document.querySelector(".container")
    for (const food of harvestedFoodArray) {
        containerSelector.innerHTML +=`<section class = "plant">${food.type}</section>`
    }
}

