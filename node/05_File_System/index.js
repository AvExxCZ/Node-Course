const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");


// sync way off creating the file

fs.writeFileSync(filePath, "Hello from node js");
console.log("File created succesfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to that file");
console.log("new file contetn added");


// async way of creating a file

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
  if (err) throw err;
  console.log("Async file created succesfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if (err) throw err;
      console.log("New line added to the async file");

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("Updated file content:", updatedData);
      });
    });
  });
});
