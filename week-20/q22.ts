class TwoDArray {
    private matrix: number[][] = [];

    getArray(size: number): void {
        console.log("Enter the array values:");

        for (let i = 0; i < size; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < size; j++) {
                let value = parseInt(prompt(`Element [${i}][${j}]: `) as string);
                this.matrix[i][j] = value;
            }
        }
    }


    displayArray(): void {
        console.log("Array elements are:");
        for (let row of this.matrix) {
            console.log(row.join("\t"));
        }
    }
}



let size = parseInt(prompt("Enter the size of array: ") as string);

if (size <= 0) {
    console.log("Size must be greater than 0.");

} else {
    let twoDArray = new TwoDArray();
    twoDArray.getArray(size);
    twoDArray.displayArray();
}

