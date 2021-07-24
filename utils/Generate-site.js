const fs = require('fs');

// writing files
const writeFile = fileContent => {
  // return new Promise((resolve, reject) => {
  fs.writeFile('./src/team.html', fileContent, err => {
    if (err) {
      reject(err);
      return;
    }

    else {
      console.log('File created')
    }
  });
  // });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './src/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      else {
        console.log('Stylesheet created')
      }
    });
  });
};

module.exports = writeFile