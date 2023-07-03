//FUNCTIONS
function isError(input) {
    if (input===undefined || input==="" || input.length<3) {
        return true;
    } return false;
}

function arraySlicing (terminalArray) {
    const newArray = terminalArray.slice(0,terminalArray.length-1);
    return newArray;
}
function initSeparator (terminalArray) {
    const newArray = terminalArray.slice(terminalArray.length-1,terminalArray.length);
    return newArray;
}

function concatenation (array, separator) {
    let newsentence = "";
    for (let i = 0; i < array.length-1; i++) {
        newsentence += array[i]+ separator;
    }
    newsentence = newsentence + array[array.length-1];
    return newsentence;
}

//ERROR HANDLING
const commandLineInput = process.argv.slice(2);

if (isError(commandLineInput)) {
    console.log("error");
    process.exit(1);
}
//PARSING
const arrayOfStrings = arraySlicing(commandLineInput);
const stringSeparator = initSeparator(commandLineInput);

//RESOLUTION
const finalString = concatenation(arrayOfStrings, stringSeparator);

//DISPLAY
console.log(finalString);