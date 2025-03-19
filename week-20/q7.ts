// Write a program to print the multiplication table of given numbers.
// Accept an input from the user and display its multiplication table

const num: number = parseInt(prompt("Enter a number") as string);

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${num} = ${i * num}`);
}
