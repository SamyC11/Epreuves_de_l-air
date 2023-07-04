
//FUNCTIONS
function firstArrayNumber(array,separator) {
    let newArray = array.filter(function(element, index){
        return index < separator;
    });
    newArray = newArray.map(function(element){
        return parseInt(element);
    });
    return newArray;
}

function secondArrayNumber (array,separator) {
    let newArray = array.filter(function(element, index){
        return index > separator;
    });
    newArray = newArray.map(function(element){
        return parseInt(element);
    });
    return newArray;
}


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
    }
    for (let i = 0; i < input.length; i++) {
        if ((isNaN(input[i])) || input[i]>input[i+1]){
            return true;
        }
    }
   return false;
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

const array1 = firstArrayNumber(commandLineInput,indexSeparator);
const array2 = secondArrayNumber(commandLineInput,indexSeparator);


if (isError(array1) || isError(array2)) {
    console.log("error");
    process.exit(1);
}
//PARSING


//RESOLUTION
const finalArray = arraysConcatenation(array1,array2);

//DISPLAY
console.log(finalArray.join(" "));