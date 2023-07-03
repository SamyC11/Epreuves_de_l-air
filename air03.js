//FUNCTIONS
function isError(input) {
    if (input===undefined || input==="" || input.length<3) {
        return true;
    } return false;
}

//ERRROR HANDLING
const commandLineInput = process.argv.slice(2);

if (isError(commandLineInput)) {      
    console.log("error");
    process.exit(1);
}

//PARSING

//RESOLUTION
const intruderValues = commandLineInput.filter(function(element,index,arr) {
    return arr.indexOf(element) === arr.lastIndexOf(element)
});
//DISPLAY
console.log(intruderValues);






/*
WHY DO NOT WORK ?
  function intrudersArray(array) {
    let intruders = [];
  
    for (let i = 0; i < array.length-1; i++) {
      let isDuplicate = false;

      for (let j = i+1; j < array.length; j++) {
        if (array[j] === array[i]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        intruders.push(array[i]);
      }
    }
    return intruders;
  }

  GOOD VERSION
function intrudersArray(array) {
    let intruders = [];
    for (let i = 0; i < array.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[j] === array[i]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        intruders.push(array[i]);
      }
    }
    return intruders;
  }
  
  
  
*/