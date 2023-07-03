//FUNCTIONS
function isError(input) {
    if (input===undefined || input==="") {
        return true;
    } return false;
}

//ERRROR HANDLING
const commandLineInput = process.argv[2];
if (isError(commandLineInput)) {      
    console.log("error");
    process.exit(1);
}

//PARSING
const arrayInput = commandLineInput.split("");
//RESOLUTION
const intruderValues = arrayInput.filter(function(element, index, arr) {
    return element !== arr[index+1];
});
//DISPLAY
console.log(intruderValues.join(""));