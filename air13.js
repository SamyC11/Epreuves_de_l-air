//MODULE IMPORTATION
const fs = require('fs');
const childProcess = require('child_process');


//VARIABLE DECLARATION

const myArray = Array(13).fill().map((_, i) => i.toString().padStart(2, '0'));
const filesNameArray = myArray.map((element) => `air${element}.js`);
const args = [process.argv[2],process.argv[3], process.argv[4]];
const options = {
    stdio: 'ignore',
  };

let currentIndex = 0;

function processNextFile() {
    if (currentIndex >= filesNameArray.length) {
      return;
    }
  
    const filePath = filesNameArray[currentIndex];
  
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`le fichier ${filePath} n'existe pas`);
        currentIndex++;
        processNextFile();
        return;
      }

      const process = childProcess.spawnSync('node', [filePath, ...args], options);
        if (process.status === 0) {
          console.log(`${filePath} (1/1) : success`);
        } else {
          console.log(`${filePath} (1/1) : failure`);
        }
        currentIndex++;
        processNextFile();
      });
    }

  //RESOLUTION
  processNextFile();
