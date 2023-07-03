
//FUNCTIONS

function isFusionPresent (input){
    for (let i = 0; i < input.length; i++) {
        if (input.includes("fusion")) {
            return true
        }
    } return false
}

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
        if (array[i]>array[i+1]) {
            return false;
        }
    } return true
}


function arraysConcatenation (array1, array2){
    let newArray = array1.concat(array2);
    newArray = newArray.sort(function(a,b){
        return a - b;
    });
    return newArray;
}





//ERRROR HANDLING

const commandLineInput = process.argv.slice(2);
if (!isFusionPresent(commandLineInput)){
    console.log("error");
    process.exit(1);
}
const indexSeparator = commandLineInput.indexOf("fusion");

let array1 = commandLineInput.filter(function(element, index){
    return index < indexSeparator;
});
array1 = array1.map(function(element){
    return parseInt(element);
});


let array2 = commandLineInput.filter(function(element, index){
    return index > indexSeparator;
});
array2 = array2.map(function(element){
    return parseInt(element);
});


if (isError(array1) || !isOnlyNumbers(array1) || !isSorted(array1)) {
    console.log("error");
    process.exit(1);
}
if (isError(array2) || !isOnlyNumbers(array2) || !isSorted(array2)) {
    console.log("error");
    process.exit(1);
}
//PARSING


//RESOLUTION
const finalArray = arraysConcatenation(array1,array2);

//DISPLAY
console.log(finalArray.join(" "));