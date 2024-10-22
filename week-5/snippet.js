db.students.insertOne({
    srn:110,
    sname:"Rahul",
    degree:"BCA",
    sem:6,
    CGPA:7.9,
})


use studb9

db.students.insertMany([
    { srn: 110, sname: "Rahul", degree: "BCA", sem: 6, CGPA: 7.9 },
    { srn: 111, sname: "Anjali", degree: "BCA", sem: 6, CGPA: 8.1 },
    { srn: 112, sname: "Vikram", degree: "BCA", sem: 5, CGPA: 7.5 },
    { srn: 113, sname: "Sneha", degree: "BCA", sem: 6, CGPA: 8.0 },
    { srn: 114, sname: "Karthik", degree: "BSc", sem: 4, CGPA: 7.4 },
    { srn: 115, sname: "Priya", degree: "BSc", sem: 4, CGPA: 8.2 },
    { srn: 116, sname: "Aman", degree: "BCA", sem: 5, CGPA: 7.8 },
    { srn: 117, sname: "Meera", degree: "BCA", sem: 6, CGPA: 8.3 },
    { srn: 118, sname: "Ravi", degree: "BCom", sem: 3, CGPA: 7.0 },
    { srn: 119, sname: "Pooja", degree: "BCom", sem: 3, CGPA: 7.6 }
])

db.books.insertMany([
    {
        "isbn" : "e40",
        "bname" : "let us C",
        "author" : [
                "yeshanth",
                "kanaka"
        ],
        "year" : 2012,
        "publisher" : "Pearson",
        "price" : 100
    },
    {
        "isbn": "e41",
        "bname": "Python Programming",
        "author": ["John Doe", "Alice Smith"],
        "year": 2015,
        "publisher": "O'Reilly Media",
        "price": 150
    },
    {
        "isbn": "e42",
        "bname": "Mastering Data Science",
        "author": ["David Clark", "Sophia Lee"],
        "year": 2018,
        "publisher": "Packt Publishing",
        "price": 200
    },
    {
        "isbn": "e43",
        "bname": "Introduction to Algorithms",
        "author": ["Thomas Cormen", "Charles Leiserson"],
        "year": 2020,
        "publisher": "MIT Press",
        "price": 250
    },
    {
        "isbn": "e44",
        "bname": "Web Development with Node.js",
        "author": ["Mark Thompson", "Eve Johnson"],
        "year": 2021,
        "publisher": "Apress",
        "price": 180
    },
    {
        "isbn": "e45",
        "bname": "Artificial Intelligence: A Modern Approach",
        "author": ["Stuart Russell", "Peter Norvig"],
        "year": 2019,
        "publisher": "Pearson",
        "price": 300
    }
])

// question 6 typo "let us see"


//q4

db.foods.insertMany([{
    "foodid" : 1,
    "foodcat" : "fast food",
    "foodname" : "burger",
    "chefname" : [
        "Naveen",
        "Rakesh"
    ],
    "price" : 500,
    "ingredients" : [
        "cheese",
        "corn"
    ],
    "hotelname" : "McBurger",
    "address" : {
        "no" : 31,
        "street" : "Bel Road",
        "locality" : "Yelahanka",
        "city" : "Bangalore"
    }
},
{
    "foodid" : 2,
    "foodcat" : "dessert",
    "foodname" : "chocolate cake",
    "chefname" : [
        "Anjali",
        "Deepak"
    ],
    "price" : 300,
    "ingredients" : [
        "chocolate",
        "flour",
        "sugar"
    ],
    "hotelname" : "Sweet Treats",
    "address" : {
        "no" : 5,
        "street" : "MG Road",
        "locality" : "Koramangala",
        "city" : "Bangalore"
    }
},
{
    "foodid" : 3,
    "foodcat" : "beverages",
    "foodname" : "cold coffee",
    "chefname" : [
        "Manoj",
        "Neha"
    ],
    "price" : 150,
    "ingredients" : [
        "coffee",
        "milk",
        "ice cream"
    ],
    "hotelname" : "Coffee Hub",
    "address" : {
        "no" : 19,
        "street" : "Church Street",
        "locality" : "Brigade Road",
        "city" : "Bangalore"
    }
},
{
    "foodid" : 4,
    "foodcat" : "main course",
    "foodname" : "pasta",
    "chefname" : [
        "Aarav",
        "Sonia"
    ],
    "price" : 400,
    "ingredients" : [
        "pasta",
        "tomato sauce",
        "basil"
    ],
    "hotelname" : "Italiano Delight",
    "address" : {
        "no" : 45,
        "street" : "Lavelle Road",
        "locality" : "MG Road",
        "city" : "Bangalore"
    }
},
{
    "foodid" : 5,
    "foodcat" : "fast food",
    "foodname" : "pizza",
    "chefname" : [
        "Suresh",
        "Kavya"
    ],
    "price" : 600,
    "ingredients" : [
        "cheese",
        "pepperoni",
        "olives"
    ],
    "hotelname" : "Pizza Corner",
    "address" : {
        "no" : 12,
        "street" : "Indiranagar Main Road",
        "locality" : "Indiranagar",
        "city" : "Bangalore"
    }
}]
)
aSDASD