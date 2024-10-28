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


//Group students by degree and count how many are in their final semester (sem: 6).
db.students.aggregate([
    {$match: { sem : 6}},
    {$group: {_id: "$degree", studentsIn6thSem:{$count: {}}}}
])


//Find the minimum CGPA for students in the 4th and 5th semesters, grouped by semester.
db.students.aggregate([
    {$match: {sem: {$in: [4, 5]}}},
    {$group: {_id: "$sem", minInSem: {$min: "$CGPA"}}}
])

//Calculate the total sum of CGPAs for each degree program.
db.students.aggregate([
    {$group: {_id:"$sem", totalCGPA: {$sum: "$CGPA"}}}
])

//Group students by semester and count how many students are in each semester.
db.students.aggregate([
    { $group: { _id: "$sem", totalStudents: { $sum: 1 } } },
]);

//Find the average CGPA for all students, but exclude those in the "BCom" degree program.
db.students.aggregate([
    {$match: {degree: {$ne : "BCom"}}},
    {$group: {_id: null, averageCGPAExcludeBCom: {$avg: "$CGPA"}}}
])

//Find the number of students with a CGPA greater than 8.0, grouped by degree.
db.students.aggregate([
    {$match: {CGPA: {$gt: 8}}},
    {$group: {_id: "$degree", count8CGPA: {$sum : 1 }}}
])

//Get the average CGPA of students in the 6th semester, 
//then find the number of students in each degree within this group.
db.students.aggregate([
    {$match:{sem: 6}},
    {$group: {_id:null, averageCGPA: {$avg: "$CGPA"}}}
])


//Calculate the maximum and minimum CGPA for students in the "BCA" program.
db.students.aggregate([
       {$match: {degree: "BCA"}},
       {$group: {_id:null, minCGPA: {$min: "$CGPA"}, maxCGPA: {$max: "$CGPA"}}}
])