const fs = require("node:fs");

const data = fs.readFileSync("file.txt", { encoding: "utf8" });
console.log(data);

fs.readFile("file.txt", (err, data) => {
    if (err) {
        console.log("error orrcured");
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

fs.writeFileSync("file2.txt", "this data has been added");
fs.writeFileSync("file2.txt", "this data has been appendied ", { flag: "a" });
