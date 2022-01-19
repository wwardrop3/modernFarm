//plants each seed type with their own properties through the planned planting array


import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from"./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlanArray) => {
    for (const rows of plantingPlanArray) {
        for (const plant of rows) {
            let plantObject = "";
            if (plant === "Corn") {
                plantObject = createCorn();
            } else if (plant==="Asparagus") {
                plantObject = createAsparagus();
            } else if (plant==="Potato") {
                plantObject= createPotato();
            } else if (plant === "Sunflower") {
                plantObject = createSunflower();
            } else if (plant==="Soybean") {
                plantObject = createSoybean();
            } else if (plant === "Wheat") {
                plantObject = createWheat()
            }
            addPlant(plantObject)
            }

        }
    }