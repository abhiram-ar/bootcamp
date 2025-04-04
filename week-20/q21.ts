class TwoDArray {
    private matrix: number[][] = [];


    getArray(rows: number, cols: number): void {
        console.log("Enter the array values:");
        for (let i = 0; i < rows; i++) {
            this.matrix[i] = []; // Initialize row
            for (let j = 0; j < cols; j++) {
                let value = parseInt(prompt(`Element [${i}][${j}]: `) as string);
                this.matrix[i][j] = value;
            }
        }
    }


    addArrays(other: TwoDArray): TwoDArray {
        let rows = this.matrix.length;
        let cols = this.matrix[0].length;
        let result = new TwoDArray();

        for (let i = 0; i < rows; i++) {
            result.matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                result.matrix[i][j] = this.matrix[i][j] + other.matrix[i][j];
            }
        }
        return result;
    }


    displayArray(): void {
        console.log("Array elements are:");
        for (let row of this.matrix) {
            console.log(row.join("\t"));
        }
    }
}


function main(): void {
    let rows = parseInt(prompt("Enter the number of rows: ") as string);
    let cols = parseInt(prompt("Enter the number of columns: ") as string);

    if (rows <= 0 || cols <= 0) {
        console.log("Rows and columns must be greater than 0.");
        return;
    }

    console.log("\nEnter values for the first matrix:");
    let matrix1 = new TwoDArray();
    matrix1.getArray(rows, cols);

    console.log("\nEnter values for the second matrix:");
    let matrix2 = new TwoDArray();
    matrix2.getArray(rows, cols);


    let resultMatrix = matrix1.addArrays(matrix2);

    console.log("\nFirst Matrix:");
    matrix1.displayArray();

    console.log("\nSecond Matrix:");
    matrix2.displayArray();

    console.log("\nResultant Matrix (After Addition):");
    resultMatrix.displayArray();
}

main();
