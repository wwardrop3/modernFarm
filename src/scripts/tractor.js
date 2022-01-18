//plants each seed type with their own properties through the planned planting array


import { addPlant } from "./field.js"

export const plantSeeds = (plantingPlanArray, plantSeedFunctionObject) => {
    for (const rows of plantingPlanArray) {
        for (const plant of rows) {
            const plantObject = plantSeedFunctionObject[plant]
            addPlant(plantObject)
        }
    }
}