//FUNCTIONS

function isError(input) {
    if (input===undefined || input.length < 2) {
        return true;
    } return false;
}

function stringsRotation(array){
    newArray = array.slice(1, array.length);
    newArray.push(array[0]);
    return newArray
};

//ERROR HANDLING
const commandLineInput = process.argv.slice(2);

if (isError(commandLineInput)) {
    console.log("error");
    process.exit(1);
}

//RESOLUTION
const finalArray = stringsRotation(commandLineInput);

//DISPLAY
console.log(finalArray.join(" "));