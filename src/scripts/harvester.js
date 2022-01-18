export const harvestPlants = (plantsArray) => {
    const seedObjects = []
    for (const plant of plantsArray) {
        
        let outputs = "";
        
        if (plant.type === "Corn") {
            outputs = plant.output/2;
            console.log(outputs)
            
            
        } else
        {
            outputs = plant.output;
            console.log(outputs)
        }


        for (let i=0; i < outputs; i++) {
            seedObjects.push(plant)
        }
        
    }
    return seedObjects
}