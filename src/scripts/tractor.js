import { addPlant } from "./field.js"

export const plantSeeds = (plantingPlanArray, plantSeedFunctionObject) => {
    for (const rows of plantingPlanArray) {
        for (const plant of rows) {
            console.log(plantSeedFunctionObject[plant])
            const plantObject = plantSeedFunctionObject[plant]
            addPlant(plantObject)
        }
    }
}