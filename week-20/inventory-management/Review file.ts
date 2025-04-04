interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

// ? create a function returning the area
function calculateArea(shape: Square | Rectangle): number {
    if (shape.kind === "rectangle") {
        return shape.height * shape.width;
    } else if (shape.kind === "square") {
        return shape.size * shape.size;
    } else {
        return 0;
    }
}

// --------
// ? create  a function returing a list of strings
function strings(arr: any[]): string[] {
    let res: string[] = [];
    arr.forEach((item) => {
        if (typeof item === "string") {
            res.push(item);
        }
    });
    return res;
}

/// -----
// ? create a simple interface with 3 keys
interface test {
    key1: string;
    key2: number;
    key3: boolean;
}

// ? create a class of that interface
class Test implements test {
    constructor(public key1: string, public key2: number, public key3: boolean) {}
}

// ? create a subclass of the class
class Tester extends Test {}

// -----
function numArr(num1: number, num2: number): [number, number] {
    return [num1, num2];
}

function genericArr<T>(num1: T, num2: T): [T, T] {
    return [num1, num2];
}

function genericTwoTypesArr<T, S>(num1: T, num2: S): [T, S] {  
    return [num1, num2];
}
