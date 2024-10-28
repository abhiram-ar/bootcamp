//Group students by semester and calculate the average CGPA for each semester.
db.students.aggregate([
    {
        $group: {_id: "$sem", averageCGPA: {$avg: "$CGPA" }}
    }
])


//Find the total number of students in each degree program, grouped by degree.
db.students.aggregate([
    {$group: {_id: "$degree", NumberOfStudens : {$sum:1}}}
])
db.students.aggregate([
    { $group: { _id: "$degree", NumberOfStudens: { $count: {} } } },
]);


//Find the highest CGPA in each degree program.
db.students.aggregate([
    {$group: {_id: "$degree", highestCGPA: {$max : "$CGPA"}}}
])