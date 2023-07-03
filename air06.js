//FUNCTIONS

function isError(input) {
    if (input===undefined || input.length < 2) {
        return true;
    } return false;
}
function isOnlyStrings(array) {
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
        return false;
        }
    } return true;
}

function WordsWithoutCharacter (array, character) {
    let newWordsArray = array.map(function(element){
            return element.split("");
        });
    newWordsArray = newWordsArray.filter(function(element){
        return !element.includes(character[0]);
    });
    return newWordsArray;
    }


//ERRROR HANDLING
const commandLineInput = process.argv.slice(2);
const noWantedCharacter = commandLineInput.slice(commandLineInput.length-1);

if (isError(commandLineInput) || !isOnlyStrings(commandLineInput) || noWantedCharacter[0].length>1) {      
    console.log("error");
    process.exit(1);
}

//PARSING
const wordsArray = commandLineInput.slice(0, commandLineInput.length-1);

// RESOLUTION
const finalArray = WordsWithoutCharacter(wordsArray, noWantedCharacter).map(function(element){
    return element.join("");
});
//DISPLAY
console.log(finalArray.join(" "));
