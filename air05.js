//FUNCTIONS

function isError(input) {
    if (input===undefined || input.length < 2) {
        return true;
    } return false;
}

function isOnlyNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
        return false;
        }
    } return true;
}

//ERRROR HANDLING
const commandLineInput = process.argv.slice(2);
const arrayNumberInput = commandLineInput.map(function(element){
    return parseInt(element,10);
});

if (isError(arrayNumberInput) || !isOnlyNumbers(arrayNumberInput)) {      
    console.log("error");
    process.exit(1);
}

//PARSING
const newArrayNumber = arrayNumberInput.slice(0,arrayNumberInput.length-1);
const operator = arrayNumberInput[arrayNumberInput.length-1];

//RESOLUTION
const finalArray = newArrayNumber.map(function(element){
    return element + operator;
});
//DISPLAY
console.log(finalArray.join(" "));