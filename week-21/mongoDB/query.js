// ----------------------DATASET-------------------------

[
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000001"),
        first_name: "John",
        last_name: "Doe",
        age: 29,
        department: "Engineering",
        salary: 75000,
        join_date: ISODate("2021-06-15T00:00:00Z"),
        address: {
            street: "123 Maple St",
            city: "San Francisco",
            state: "CA",
            zip: "94105",
        },
        skills: ["JavaScript", "Node.js", "MongoDB"],
        projects: [
            {
                project_id: 101,
                project_name: "Project Alpha",
                role: "Developer",
            },
            {
                project_id: 102,
                project_name: "Project Beta",
                role: "Lead Developer",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000002"),
        first_name: "Jane",
        last_name: "Smith",
        age: 34,
        department: "HR",
        salary: 65000,
        join_date: ISODate("2019-03-10T00:00:00Z"),
        address: {
            street: "456 Oak Ave",
            city: "Los Angeles",
            state: "CA",
            zip: "90001",
        },
        skills: ["Communication", "Recruitment", "Conflict Resolution"],
        projects: [],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000003"),
        first_name: "Mike",
        last_name: "Brown",
        age: 41,
        department: "Sales",
        salary: 80000,
        join_date: ISODate("2018-11-20T00:00:00Z"),
        address: {
            street: "789 Pine Rd",
            city: "New York",
            state: "NY",
            zip: "10001",
        },
        skills: ["Negotiation", "Customer Relations"],
        projects: [
            {
                project_id: 103,
                project_name: "Project Gamma",
                role: "Sales Lead",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000004"),
        first_name: "Sara",
        last_name: "Connor",
        age: 37,
        department: "Engineering",
        salary: 90000,
        join_date: ISODate("2020-01-05T00:00:00Z"),
        address: {
            street: "321 Birch Blvd",
            city: "Seattle",
            state: "WA",
            zip: "98101",
        },
        skills: ["Python", "Django", "MongoDB"],
        projects: [
            {
                project_id: 104,
                project_name: "Project Delta",
                role: "Developer",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000005"),
        first_name: "David",
        last_name: "Lee",
        age: 25,
        department: "Engineering",
        salary: 68000,
        join_date: ISODate("2022-09-01T00:00:00Z"),
        address: {
            street: "654 Cedar St",
            city: "Austin",
            state: "TX",
            zip: "73301",
        },
        skills: ["Java", "Spring", "MongoDB"],
        projects: [
            { project_id: 101, project_name: "Project Alpha", role: "Tester" },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000006"),
        first_name: "Emily",
        last_name: "Clark",
        age: 32,
        department: "Marketing",
        salary: 72000,
        join_date: ISODate("2020-08-12T00:00:00Z"),
        address: {
            street: "987 Spruce Dr",
            city: "Chicago",
            state: "IL",
            zip: "60601",
        },
        skills: ["SEO", "Content Creation", "Social Media"],
        projects: [
            {
                project_id: 105,
                project_name: "Project Epsilon",
                role: "Coordinator",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000007"),
        first_name: "Robert",
        last_name: "King",
        age: 45,
        department: "Finance",
        salary: 95000,
        join_date: ISODate("2017-05-23T00:00:00Z"),
        address: {
            street: "159 Walnut Ave",
            city: "Boston",
            state: "MA",
            zip: "02108",
        },
        skills: ["Accounting", "Budgeting", "Excel"],
        projects: [],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000008"),
        first_name: "Linda",
        last_name: "Green",
        age: 38,
        department: "Engineering",
        salary: 85000,
        join_date: ISODate("2019-12-01T00:00:00Z"),
        address: {
            street: "753 Elm St",
            city: "Denver",
            state: "CO",
            zip: "80202",
        },
        skills: ["C++", "Java", "MongoDB"],
        projects: [
            {
                project_id: 102,
                project_name: "Project Beta",
                role: "Developer",
            },
            {
                project_id: 104,
                project_name: "Project Delta",
                role: "Reviewer",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000009"),
        first_name: "Kevin",
        last_name: "White",
        age: 28,
        department: "Sales",
        salary: 70000,
        join_date: ISODate("2021-04-17T00:00:00Z"),
        address: {
            street: "852 Poplar Ln",
            city: "Miami",
            state: "FL",
            zip: "33101",
        },
        skills: ["Salesforce", "CRM"],
        projects: [
            {
                project_id: 103,
                project_name: "Project Gamma",
                role: "Assistant",
            },
        ],
    },
    {
        _id: ObjectId("64a1f0d1a7e1d1001a000010"),
        first_name: "Amy",
        last_name: "Davis",
        age: 31,
        department: "HR",
        salary: 66000,
        join_date: ISODate("2022-02-20T00:00:00Z"),
        address: {
            street: "357 Aspen Way",
            city: "Portland",
            state: "OR",
            zip: "97205",
        },
        skills: ["Onboarding", "Training", "Employee Engagement"],
        projects: [],
    },
];

// -----------------------EASY-------------------------

db.employee.find({}, { first_name: 1, join_date: 1 }).sort({ join_date: 1 });

db.employee.find({ skill: "MongoDB" });

// -----------------MEDIUM----------------------

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

// Find employees with a salary between 50000 and 80000.
db.employee.find({ salary: { $gte: 50000, $lte: 80000 } }, { salary: 1 });

// ----------------------------HARD---------------------------------
// Calculate the average salary for each department using aggregation.
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            avgSalary: { $avg: "$salary" },
        },
    },
]);

// Group employees by the year they joined and count the number in each group.
db.employee.aggregate([
    {
        $group: {
            _id: { $year: "$join_date" },
            count: { $count: {} }, // or we can use {$sum: 1}
        },
    },
]);

// Unwind the projects array and then group by project name to count how many employees are working on each project.
db.employee.aggregate([
    { $unwind: "$projects" },
    {
        $group: {
            _id: "$projects.project_name",
            noOfEmployees: { $sum: 1 },
        },
    },
]);

// Find the employee with the highest salary in each department.
db.employee.aggregate([
    { $sort: { department: 1, salary: -1 } },
    {
        $group: {
            _id: "$department",
            topEmployee: { $first: "$$ROOT" },
        },
    },
    {
        $replaceRoot: { newRoot: "$topEmployee" }, // Flatten result to show employee fields
    },
]);

// or
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            topEmployee: { $first: "$salary" },
        },
    },
]);

//Increase the salary of all employees in the "Engineering" department by 5% using an update operation.
db.employee.updateMany(
    { department: "Engineering" },
    { $mul: { salary: 1.05 } }
);

// Using aggregation, determine the top 3 departments with the highest average salary.
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            avgSalary: { $avg: "$salary" },
        },
    },
    {
        $sort: { avgSalary: -1 },
    },
    {
        $limit: 3,
    },
]);

// Find employees whose projects array includes a project where their role is "Lead Developer".
db.employee.find({ "projects.role": "Lead Developer" });
db.employee.find({ projects: { $elemMatch: { role: "Lead Developer" } } });

// Use a regular expression to find employees whose street address contains "St".
db.employee.find({ "address.street": /st/ }, { "address.street": 1 });

// Create a text index on the skills field and perform a text search for "MongoDB".
db.employee.createIndex({ skills: "text" });
db.employee.find({ $text: { $search: "MongoDB" } });

// ------------------------VERY HARD-----------------------------

// Write an aggregation pipeline that groups employees by both department and state (from address)
// and calculates the average salary for each group.
db.employee.aggregate([
    {
        $group: {
            _id: { department: "$department", state: "$address.state" },
            avgSalary: { $avg: "$salary" },
        },
    },
]);

// Build an aggregation pipeline that unwinds the projects array,
// filters for projects where role equals "Developer",
// groups by employee and project, and then sorts the results by join_date.
db.employee.aggregate([
    { $unwind: "$projects" },
    { $match: { "projects.role": "Developer" } },
    {
        $group: {
            _id: {
                employeeName: { $concat: ["$first_name", "$last_name"] },
                projectName: "$projects.project_name",
            },
            joiningDate: { $first: "$join_date" },
        },
    },
    { $sort: { joiningDate: 1 } },
]);

// Use $facet to run multiple aggregations simultaneously—calculate
// the total number of employees,
// the average salary, and the count per department.
db.employee.aggregate([
    {
        $facet: {
            totalNumberOfEmployees: [
                {
                    $count: "count",
                },
            ],
            averageSalary: [
                {
                    $group: {
                        _id: null,
                        averageSalary: { $avg: "$salary" },
                    },
                },
            ],
            countPerDepartment: [
                {
                    $group: {
                        _id: "$department",
                        count: { $sum: 1 },
                    },
                },
            ],
        },
    },
]);

// Write a query to update a nested field in the projects array (for example,
// change the role of employees working on "Project Alpha" to "Senior Developer").
db.employee.updateMany(
    {
        projects: { $elemMatch: { project_name: "Project Alpha" } },
    },
    {
        $set: { "projects.$[proj].role": "Senior Developer" },
    },
    {
        arrayFilters: [{ "proj.project_name": "Project Alpha" }],
    }
);

// Use aggregation to group employees by department and
// output an array of objects containing employee names and their skills.
db.employee.aggregate([
    {
        $group: {
            _id: "$department",
            empNames: { $push: { name: "first_name", skills: "$skills" } },
        },
    },
]);

// Write an aggregation pipeline to find employees who have duplicate entries
// in their skills array and remove the duplicates.
db.employee.updateMany({}, [
    { $set: { skills: { $setUnion: ["$skills", []] } } },
]);
