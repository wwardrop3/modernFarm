const asparagus = () => {
    console.log("asdfasdfa")
}



// const plantSeedFunctionObject = {
//     Asparagus: asparagus(),
// }

const testArray = ["Asparagus", "Corn", "asdf"]

for (const test of testArray) {
    switch (test) {
        case "Asparagus":
            asparagus()
            break;
        
        case "Corn":
            break;

        default:
            console.log("works")
    }
}