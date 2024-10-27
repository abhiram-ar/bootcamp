db.students.aggregate([
    {
        $group: {_id: "$sem", averageCGPA: {$avg: "$CGPA" }}
    }
])