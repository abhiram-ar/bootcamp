db.employee.find({}, { first_name: 1, join_date: 1 }).sort({ join_date: 1 });

db.employee.find({ skill: "MongoDB" });

db.employee.find({ join_date: { $gte: oneYearAgo } });

// Find employees who joined in the last year.
db.employee.find({
    join_date: {
        $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    },
});

// Update the salary of all employees in the "HR" department by increasing it by 10%.
db.employee.updateMany({ department: "HR" }, { $mul: { salary: 1.1 } });

// Find employees who are involved in more than 1 project.
// hint: $gt: [value1, value2] returns true if value1 > value2.
db.employee.find({ $expr: { $gt: [{ $size: "$projects" }, 1] } });

// Add a new skill "Python" to employees who do not already have it in their skills array.
db.employee.updateMany({}, { $addToSet: { skills: "Python" } });

// Return only the first name, last name, and skills for all employees.
db.employee.find({}, { first_name: 1, last_name: 1 });

// Find employees who have either "Java" or "C++" in their skills.
db.employee.find({ skills: { $in: ["Java", "C++"] } });

// Count the number of employees per department.
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            count: { $sum: 1 },
        },
    },
]);

// Find employees whose address state is "CA".
db.employee.find({ "address.state": "CA" }, { first_name: 1, address: 1 });

// Find employees who work in either the "Engineering" or "Sales" departments.
db.employee.find({ department: { $in: ["Engineering", "Sales"] } });
