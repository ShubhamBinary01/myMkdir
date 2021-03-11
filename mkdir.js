#!/usr/bin/env node
let fs = require("fs");

(function () {
  let number = process.argv[2];
  let folderName = process.argv[3];

  if (!Number.isInteger(+number) || number <= 0) {
    console.log("invalid input");
    return;
  }

  try {
    if (fs.existsSync(`${folderName}-0`)) {
      for (let i = 0; i < number; i++) {
        fs.rmdirSync(`${folderName}-${i}`);
      }
    } else {
      for (let i = 0; i < number; i++) {
        fs.mkdirSync(`${folderName}-${i}`);
      }
    }
  } catch (err) {
    console.log(
      "Some error occured, possibly number was Greater than expexted"
    );
  }
})();
