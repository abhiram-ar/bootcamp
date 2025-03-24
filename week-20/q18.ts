const weights = {
    test: 70,
    lab: 20,
    assignment: 10
} as const


const writtenTestScore = parseInt(prompt("Enter written test score?") as string)
const labScore = parseInt(prompt("Enter written test score?") as string)
const assignmentScore = parseInt(prompt("Enter written test score?") as string)


const overAllGrade = ((writtenTestScore * weights.test) + (labScore * weights.lab) + (assignmentScore * weights.assignment)) / 100

console.log("Grade: ", overAllGrade)