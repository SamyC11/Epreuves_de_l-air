//FUNCTIONS
function isError (input) {
    if (input==="" | input===undefined) {
       return true; 
    } return false;
}

function stringSplit (stringToSplit, separator) {
    newArray = [];
    index = 0
    for (let i = 0; i < stringToSplit.length; i++) {
    if ((stringToSplit.slice(i,i+separator.length))===separator) {
            newArray.push(stringToSplit.slice(index,i));
            index = i+separator.length;
        }
    } 
    newArray.push(stringToSplit.slice(index,stringToSplit.length));
    return newArray;
}


//ERROR HANDLING
const commandLineInput = process.argv[2];
const stringSeparator = process.argv[3];

if (isError(commandLineInput)|| isError(stringSeparator)) {
    console.log("error");
    process.exit(1);
}



//RESOLUTION
const finalArray = stringSplit(commandLineInput, stringSeparator);


//DISPLAY
console.log(finalArray.join("\n"));