//FUNCTIONS
function isError (input) {
    if (input===undefined || input===" " || input==="") {
        return true;
    }
    return false;
}

function pyramidCreation (character, number) {
    const pyramid = [];
    for (let i = 1; i <= number ; i++) {
        const spaces = Array(number*2-i).fill(" ").join("");
        const characters = Array(i*2-1).fill(character).join("");
        const rowConcat = spaces + characters + spaces;
        pyramid.push(rowConcat);
    }
    return pyramid;
}

//ERRRORS HANDLING
const characterinput = process.argv[2];
const numberOfSteps = process.argv[3];

if (isError(characterinput) || isError(numberOfSteps) || characterinput.length>1) {
    console.log("error");
    process.exit(1);
}

//PARSING


//RESOLUTION

const finalArray = pyramidCreation(characterinput,numberOfSteps);

//DISPLAY

console.log(finalArray.join("\n"));
