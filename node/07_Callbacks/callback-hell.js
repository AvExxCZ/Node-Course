const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  const modifyFileData = data.toUpperCase();

  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.error("Error writing file");
      return;
    }

    console.log("data written to the new file");

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file");
        return;
      }

      console.log(data);
    });
  });
});
