// Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

const day: number = parseInt(prompt("Enter the day: ") as string);

let week:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "Invalid Entry";

switch (day) {
    case 1:
        week = "sunday";
        break;
    case 2:
        week = "monday";
        break;
    case 3:
        week = "tuesday";
        break;
    case 4:
        week = "wednesday";
        break;
    case 5:
        week = "thursday";
        break;
    case 6:
        week = "friday";
        break;
    case 7:
        week = "saturday";
        break;
    default:
        week = "Invalid Entry";
}
console.log(week);
