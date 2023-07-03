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
        if (stringToSplit[i]===separator) {
            newArray.push(stringToSplit.slice(index,i));
            index = i+1;
        }
    } 
    newArray.push(stringToSplit.slice(index,stringToSplit.length));
    return newArray;
}
//ERROR HANDLING
const commandLineInput = process.argv[2];

if (isError(commandLineInput)) {
    console.log("error");
    process.exit(1);
}

//RESOLUTION
const stringSeparator = " " || " " || "\n";
const finalArray = stringSplit(commandLineInput, stringSeparator);


//DISPLAY
 console.log(finalArray.join("\n"));