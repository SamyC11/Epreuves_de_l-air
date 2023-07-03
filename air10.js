//MODULE IMPORTATION
const fs = require('fs');


//PARSING
const filePath = process.argv[2];

//RESOLUTION
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log("error");
      process.exit(1);
    }
    console.log(data)
  });