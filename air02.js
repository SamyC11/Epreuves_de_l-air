//FUNCTIONS
function isError(input) {
    if (input===undefined || input==="") {
        return true;
    } return false;
}

/*function arraySlicing (terminalArray) {
    const newArray = terminalArray.slice(0,terminalArray.length-1);
    return newArray;
}
function initSeparator (terminalArray) {
    const newArray = terminalArray.slice(terminalArray.length-1,terminalArray.length);
    return newArray;
}*/

function concatenation (array, separator) {
    let newsentence = "";
    for (let i = 0; i < array.length-1; i++) {
        newsentence += array[i]+ separator;
    }
    newsentence = newsentence + array[array.length-1];
    return newsentence;
}

//ERROR HANDLING
const arrayOfString = process.argv.slice(2, -1);
const stringSeparator = process.argv.slice(-1);

if (isError(arrayOfString) || isError(stringSeparator) || arrayOfString.length<2) {
    console.log("error");
    process.exit(1);
}
//PARSING


//RESOLUTION
const finalString = concatenation(arrayOfString, stringSeparator);

//DISPLAY
console.log(finalString);