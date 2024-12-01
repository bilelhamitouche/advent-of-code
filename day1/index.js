const path = require("path");
const fs = require("fs/promises");

function countOccurrences(array, number) {
  return array.reduce((count, item) => {
    return item === number ? count + 1 : count;
  }, 0);
}

async function readFile(file) {
  try {
    const data = await fs.readFile(file, { encoding: "utf-8" });
    let total = 0;
    const newData = data.split("\n");
    const array1 = [];
    const array2 = [];
    for (let i = 0; i < newData.length; i++) {
      newData[i] = newData[i].replace(/\s+/g, " ");
      array1[i] = parseInt(newData[i].split(" ")[0]);
      array2[i] = parseInt(newData[i].split(" ")[1]);
    }
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    let occurences = 0;
    for (let i = 0; i < array1.length - 1; i++) {
      occurences += countOccurrences(array2, array1[i]) * array1[i];
    }
  } catch (err) {
    console.log(err);
  }
}

readFile("./input.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
