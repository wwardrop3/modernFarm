export const plantsArray = []

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


