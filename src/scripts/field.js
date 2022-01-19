export const plantsArray = []

//adds seed object that takes the plan seeds, makes them an object with properties and this adds those plant objects to the new plants array
export const addPlant = (seedObject) => {
    const isCorn = Array.isArray(seedObject)
    if (isCorn) {
        for (const subplant of seedObject) {
            plantsArray.push(subplant)
        }
        } else
        {
            plantsArray.push(seedObject)
        }

}

export const usePlants = () => {
    return plantsArray
}


