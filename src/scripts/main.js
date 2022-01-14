import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { plantsArray } from "./field.js"

const plantSeedFunctionObject = {
    Asparagus: createAsparagus(),
    Corn: createCorn(),
    Potato: createPotato(),
    Soybean: createSoybean(),
    Sunflower: createSunflower(),
    Wheat: createWheat(),
}


console.log("Welcome to the main module")

const plan = createPlan()

plantSeeds(plan, plantSeedFunctionObject)

const plantList = usePlants()
console.log(plantList)