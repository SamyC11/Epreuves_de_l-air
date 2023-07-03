//FUNCTION
function isError(input) {
    if (input===undefined || input.length<3 || input.includes(NaN)) {
        return true;
    }return false;
}
function isOnlyNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
        return false;
        }
    } return true;
}


function quickSort (array){
    if (array.length<2)
    return array;

let pivot = array.pop();
let less = [];
let greater = [];
    for (const number of array) {
        if (number<pivot) {
            less.push(number);
        }
        else {
            greater.push(number);
        }
    } 
    return quickSort(less).concat(pivot).concat(quickSort(greater));

}


//ERROR HANDLING
const commandLineInput = process.argv.slice(2);

if (isError(commandLineInput) || !isOnlyNumbers(commandLineInput)) {
    console.log("error");
    process.exit(1);
}

//PARSING
const myArray = commandLineInput.map(function(element){
    return parseInt(element);
})

//RESOLUTION
const mySortedArray = quickSort(myArray);

//DISPLAY
console.log(mySortedArray.join(" "));