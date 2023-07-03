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
function isSorted(array){
    for (let i = 0; i < array.length; i++) {
        if ([i]>[i+1]) {
            return false;
        }
    } return true
}

function insertInSortArray (array,newvalue){
    array.push(newvalue);
    const newArray = array.sort(function(a,b){
    return a-b;
    });
    return newArray;
}

//ERRROR HANDLING
const commandLineInput = process.argv.slice(2);
const arrayNumberInput = commandLineInput.map(function(element){
    return parseInt(element,10);
});

if (isError(arrayNumberInput) || !isOnlyNumbers(arrayNumberInput) || !isSorted(arrayNumberInput)) {      
    console.log("error");
    process.exit(1);
}

//PARSING
const newArrayNumber = arrayNumberInput.slice(0,arrayNumberInput.length-1);
const numberToAdd = arrayNumberInput[arrayNumberInput.length-1];

//RESOLUTION
const finalArray = insertInSortArray(newArrayNumber,numberToAdd);

//DISPLAY
console.log(finalArray.join(" "));