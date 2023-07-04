//FUNCTION
function isError(input) {
    if (input===undefined || input.length<3 || input.includes(NaN)) {
        return true;
    }
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
        return true;
        } 
    }return false;
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


console.log(commandLineInput);
if (isError(commandLineInput)) { 
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