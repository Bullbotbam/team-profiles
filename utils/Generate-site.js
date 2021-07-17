const fs = require('fs');

// writing files
const writeFile = fileContent => {
  // return new Promise((resolve, reject) => {
  fs.writeFile('./dist/team.html', fileContent, err => {
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
    fs.copyFile('./src/style.css', './dist/style.css', err => {
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

module.exports = { writeFile, copyFile };
