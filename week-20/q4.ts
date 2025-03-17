// Program should accept an input from the user and output a message as “Passed” or “Failed
const mark: number = parseInt(prompt("Enter the mark") as string);
if (mark >= 35) console.log("passed");
else console.log("failed");
