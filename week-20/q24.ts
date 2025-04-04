class Area {
    circle(radius: number): number {
        return Math.PI * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, width: number): number {
        return length * width;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main(): void {
        while (true) {
            console.log("\n===== Area Calculation Menu =====");
            console.log("1. Circle");
            console.log("2. Square");
            console.log("3. Rectangle");
            console.log("4. Triangle");
            console.log("5. Exit");

            let choice = parseInt(prompt("Enter your choice: ") as string);

            switch (choice) {
                case 1:
                    this.circleMenu();
                    break;
                case 2:
                    this.squareMenu();
                    break;
                case 3:
                    this.rectangleMenu();
                    break;
                case 4:
                    this.triangleMenu();
                    break;
                case 5:
                    console.log("Exiting program...");
                    return;
                default:
                    console.log("Invalid choice! Please enter a number between 1 and 5.");
            }
        }
    }

    private circleMenu(): void {
        let radius = parseFloat(prompt("Enter radius of the circle: ") as string);
        console.log(`Area of Circle: ${this.circle(radius).toFixed(2)}`);
    }

    private squareMenu(): void {
        let side = parseFloat(prompt("Enter side length of the square: ") as string);
        console.log(`Area of Square: ${this.square(side).toFixed(2)}`);
    }

    private rectangleMenu(): void {
        let length = parseFloat(prompt("Enter length of the rectangle: ") as string);
        let width = parseFloat(prompt("Enter width of the rectangle: ") as string);
        console.log(`Area of Rectangle: ${this.rectangle(length, width).toFixed(2)}`);
    }

    private triangleMenu(): void {
        let base = parseFloat(prompt("Enter base of the triangle: ") as string);
        let height = parseFloat(prompt("Enter height of the triangle: ") as string);
        console.log(`Area of Triangle: ${this.triangle(base, height).toFixed(2)}`);
    }
}

const myClassInstance = new MyClass();
myClassInstance.main();
