//Accept a char input from the user and display it on the console.
process.stdout.write("Enter a character");
process.stdin.on("data", (data: Buffer<ArrayBufferLike>) => {
  const name = data.toString().trim();
  console.log(name);
});
